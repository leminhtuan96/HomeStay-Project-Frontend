import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  booking(data): Observable<any> {
    return this.http.post(environment.url_api + `user/booking`, data);
  }

  getRoom(id): Observable<any> {
    return this.http.get(environment.url_api + `detailroom/${id}`)
  }

  historyBooking(id): Observable<any> {
    return this.http.get(environment.url_api + `user/bookingdetail/${id}`)
  }





}
