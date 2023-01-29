import {Component, OnInit} from '@angular/core';
import {LabelType, Options} from "@angular-slider/ngx-slider";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {FormatText} from "../../shared/format-text.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cityFormControl = new FormControl('');
  cities = ["بابل", "ساری"];
  filteredCities: Observable<string[]> | undefined;
  bedroomsCountOptions = [
    {value: '1', viewValue: '۱'},
    {value: '2', viewValue: '۲'},
    {value: '3', viewValue: '۳'},
    {value: '4', viewValue: '۴'},
    {value: '4+', viewValue: 'بیشتر از ۴'},
  ]

  constructor(private appService: FormatText) {
    this.appService = appService;
  }

  ngOnInit(): void {
    this.filteredCities = this.cityFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
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
          return '<b>حداقل قیمت : </b>' + this.appService.numLatinToFa(value.toString());
        case LabelType.High:
          return '<b>حداکثر قیمت : </b>' + this.appService.numLatinToFa(value.toString());
        default:
          return '' + this.appService.numLatinToFa(value.toString());
      }
    }
  };

  private _filter(value: string): string[] {
    const filterCity = value.toLowerCase();
    return this.cities.filter(option => option.toLowerCase().includes(filterCity));
  }

}
