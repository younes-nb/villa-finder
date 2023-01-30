import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Villa} from "../../../types";

@Injectable({
  providedIn: 'root'
})
export class VillasService {
  API_SERVER = "http://localhost:3000/api/villas";

  constructor(private http: HttpClient) {
  }

  getVillas(): Observable<any> {
    return this.http.get<Villa[]>(this.API_SERVER);
  }

  getVilla(id: string): Observable<any> {
    return this.http.get<Villa>(`${this.API_SERVER}/${id}`);
  }
}
