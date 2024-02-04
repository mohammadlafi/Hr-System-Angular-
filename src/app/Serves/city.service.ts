import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cityDto } from '../model/City';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpclient:HttpClient) {}

  insert(cityD:cityDto):Observable<any>
  {
   return this.httpclient.post("http://localhost/HrApi/api/City",cityD)
  }

  getCityDto():Observable<any>
  {
   return this.httpclient.get("http://localhost/HrApi/api/City")
  }

  getCityBySearch(country_id:number):Observable<any>
  {
      return this.httpclient.get("http://localhost/HrApi/api/City/getCity?country_id="+country_id)
  }


}
