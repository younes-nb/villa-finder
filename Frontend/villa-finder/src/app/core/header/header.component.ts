import {Component, OnInit} from '@angular/core';
import {LabelType, Options} from "@angular-slider/ngx-slider";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {FormatTextService} from "../../shared/format-text.service";
import {LocationService} from "../../shared/location.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  states!: string[];
  stateFormControl: FormControl = new FormControl('');
  filteredStates: Observable<string[]> | undefined;

  cities!: string[];
  isCityEditable: boolean = false;
  citiesFormDisable: boolean = true;
  cityFormControl: FormControl = new FormControl('');
  filteredCities: Observable<string[]> | undefined;

  bedroomsCountOptions = [
    {value: '1', viewValue: '۱'},
    {value: '2', viewValue: '۲'},
    {value: '3', viewValue: '۳'},
    {value: '4', viewValue: '۴'},
    {value: '4+', viewValue: 'بیشتر از ۴'},
  ]

  constructor(private formatTextService: FormatTextService, private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.getStates()
  }

  getStates() {
    this.locationService.getStates().subscribe(result => {
      this.states = result.map((state: any) => state.name);
      this.filteredStates = this.stateFormControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterLocation(value || '', this.states)),
      );
    });
  }

  getCities(event: MatAutocompleteSelectedEvent) {
    this.clearCityFilter();
    this.locationService.getCitiesOfState(event.option.value).subscribe(result => {
      this.cities = result.cities.map((city: any) => city.name);
      this.isCityEditable = true;
      this.filteredCities = this.cityFormControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterLocation(value || '', this.cities))
      )
    })
  }

  clearCityFilter() {
    this.isCityEditable = false;
    this.filteredCities = new Observable<string[]>();
    this.cityFormControl.setValue('');
  }

  minRentValue: number = 1;
  maxRentValue: number = 100;
  sliderOptions: Options = {
    floor: 1,
    ceil: 100,
    showSelectionBar: true,
    getSelectionBarColor: (): string => {
      return '#06b995';
    },
    getPointerColor: (): string => {
      return '#06b995';
    },
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>حداقل قیمت : </b>' + this.formatTextService.numLatinToFa(value.toString());
        case LabelType.High:
          return '<b>حداکثر قیمت : </b>' + this.formatTextService.numLatinToFa(value.toString());
        default:
          return '' + this.formatTextService.numLatinToFa(value.toString());
      }
    }
  };

  private _filterLocation(value: string, locations: string[]): string[] {
    return locations.filter(option => option.toLowerCase().includes(value.toLowerCase()));
  }
}
