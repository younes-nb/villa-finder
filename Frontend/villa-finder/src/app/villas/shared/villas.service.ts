import {Injectable} from '@angular/core';
import {Villa} from "../../../types/villa";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
