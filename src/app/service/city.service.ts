import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CityService {
  constructor(private http: HttpClient) {}
  getAllCity(): Observable<any> {
    return this.http.get<any>(environment.url_api + `city`);
  }

  getByIdCity(id): Observable<any> {
    return this.http.get<any>(environment.url_api + `city/${id}`)
  }
}
