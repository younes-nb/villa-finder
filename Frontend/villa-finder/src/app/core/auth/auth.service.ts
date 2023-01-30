import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import * as http from "http";

const AUTH_API: string = 'http://localhost:3000/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {username, password}, httpOptions);
  }

  register(firstName: string, lastName: string, username: string, email: string, phone: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {firstName, lastName, username, email, phone, password}, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
