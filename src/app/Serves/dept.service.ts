import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dept } from '../model/Dept';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor(private httpClinent:HttpClient) { }


  insert(deptDto:Dept):Observable<any>
  {
   return this.httpClinent.post("http://localhost/HrApi/api/Department",deptDto)
  }

  getDep():Observable<any>
  {
   return this.httpClinent.get("http://localhost/HrApi/api/Department")
  }
}
