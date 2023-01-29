import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
  }

  getStates(): Observable<any> {
    return this.http.get('https://iran-locations-api.vercel.app/api/v1/states');
  }

  getCitiesOfState(state: string): Observable<any> {
    return this.http.get(`https://iran-locations-api.vercel.app/api/v1/cities?state=${state}`);
  }

}
