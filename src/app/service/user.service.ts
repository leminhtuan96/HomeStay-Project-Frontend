import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getById(id:any): Observable<any> {
return this.http.get<any>(environment.url_api + `user/detail/${id}`);
  }

  updateUser(id, data):Observable<any>{
return this.http.put<any>(environment.url_api + `user/update/${id}`, data);
  }

  searchRoom(data):Observable<any>{
    return this.http.post<any>(environment.url_api + `search`,data);
  }



}
