import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) { }

  getAllRoom(): Observable<any> {
    return this.http.get<any>(environment.url_api + `room`);
  }

  getAllRoomHost(id: any): Observable<any> {
    return this.http.get<any>(environment.url_api + `admin/host/${id}`);
  }

  createRoomHost(data: any): Observable<any> {
    return this.http.post<any>(environment.url_api + `user/room`, data);
  }

  updateRoomHost(id, data): Observable<any> {
    return this.http.put<any>(environment.url_api + `user/room/${id}`, data);
  }

  detailRoomHost(id): Observable<any> {
    return this.http.get<any>(environment.url_api + `user/room/${id}`);
  }

  getById(id): Observable<any> {
    return this.http.get<any>(environment.url_api + `user/detail/${id}`);
  }

  deleteRoomHost(id): Observable<any> {
    return this.http.delete<any>(environment.url_api + `user/room/${id}`);
  }

  detailHome(id): Observable<any> {
    return this.http.get<any>(environment.url_api + `detailroom/${id}`);
  }

  ratingRoom(id): Observable<any> {
    return this.http.get<any>(environment.url_api + `rating/${id}`)
  }



}
