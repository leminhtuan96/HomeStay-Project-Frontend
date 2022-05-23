import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post<any>(environment.url_api + `login`, data);
  }

  register(data): Observable<any> {
    return this.http.post<any>(environment.url_api + `register`, data);
  }

  logoutUser(): Observable<any> {
    return this.http.get<any>(environment.url_api + `logout`);
  }

  changePassword(data): Observable<any> {
    return this.http.post<any>(environment.url_api + `admin/password`, data);
  }




}
