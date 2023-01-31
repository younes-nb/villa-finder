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

  getAll(): Observable<any> {
    return this.http.get<Villa[]>(this.API_SERVER);
  }

  get(id: string): Observable<any> {
    return this.http.get<Villa>(`${this.API_SERVER}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.API_SERVER, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.API_SERVER}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.API_SERVER}/${id}`);
  }
}
