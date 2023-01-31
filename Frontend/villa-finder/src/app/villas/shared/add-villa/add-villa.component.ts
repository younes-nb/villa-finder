import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VillasService} from "../villas.service";
import {Router} from "@angular/router";
import {map, Observable, startWith} from "rxjs";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {LocationService} from "../../../shared/location.service";

@Component({
  selector: 'app-add-villa',
  templateUrl: './add-villa.component.html',
  styleUrls: ['./add-villa.component.scss']
})
export class AddVillaComponent implements OnInit {
  addVillaForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    bedrooms: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    latitude: new FormControl('', Validators.required),
    longitude: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
  })
  states!: string[];
  filteredStates: Observable<string[]> | undefined;
  cities!: string[];
  isCityEditable: boolean = false;
  citiesFormDisable: boolean = true;
  filteredCities: Observable<string[]> | undefined;

  constructor(private villasService: VillasService, private router: Router, private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.getStates()
  }

  onSubmit(): void {
    const data = {
      title: this.addVillaForm.controls['title'].value,
      bedrooms: this.addVillaForm.controls['bedrooms'].value,
      price: this.addVillaForm.controls['price'].value,
      state: this.addVillaForm.controls['state'].value,
      city: this.addVillaForm.controls['city'].value,
      latitude: this.addVillaForm.controls['latitude'].value,
      longitude: this.addVillaForm.controls['longitude'].value,
      details: this.addVillaForm.controls['details'].value,
    }
    this.villasService.create(data).subscribe({
      next: () => {
        this.router.navigate(['profile']);
      },
      error: () => {
        alert('عملیات ناموفق بود.');
      }
    });
  }

  getStates() {
    this.locationService.getStates().subscribe(result => {
      this.states = result.map((state: any) => state.name);
      this.filteredStates = this.addVillaForm.controls['state'].valueChanges.pipe(
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
      this.filteredCities = this.addVillaForm.controls['city'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterLocation(value || '', this.cities))
      )
    })
  }

  clearCityFilter() {
    this.isCityEditable = false;
    this.filteredCities = new Observable<string[]>();
    this.addVillaForm.controls['city'].setValue('');
  }

  private _filterLocation(value: string, locations: string[]): string[] {
    return locations.filter(option => option.toLowerCase().includes(value.toLowerCase()));
  }
}
