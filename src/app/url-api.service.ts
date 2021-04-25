import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';


@Injectable({
  providedIn: 'root'
})
export class UrlApiService {

  constructor(private http: HttpClient) { }

  getApi(name:string): Observable<City>{
    
    // let params = new HttpParams();
    // params = params.append('name', name);
    return this.http.get<City>
    ('http://api.weatherstack.com/current?access_key=44281a1028218761c02e970cbd48ddba&query='+name);

  }


}
