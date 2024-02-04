import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { countryDto } from '../model/Country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpclient:HttpClient) { }


  insert(counD:countryDto):Observable<any>
  {
    debugger
   return this.httpclient.post("http://localhost/HrApi/api/Country",counD)
  }

  gteAllCountry():Observable<any>
  {
   return this.httpclient.get("http://localhost/HrApi/api/Country")
  }  
}
