import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employeeDto } from '../model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }


  insert(employeeD:employeeDto):Observable<any>
  {
    return  this.httpClient.post("http://localhost/HrApi/api/Employee",employeeD)
  }


  getBySearch(Fname:string):Observable<any>
  {
    return this.httpClient.get("http://localhost/HrApi/api/Employee?FName="+Fname)
  }
  dleteEmp(id:number):Observable<any>
  {
    return this.httpClient.delete("http://localhost/HrApi/api/Employee?id="+id)
  }
  getEmp(id:number):Observable<any>
  {
    return this.httpClient.get("http://localhost/HrApi/api/Employee/getEmp?id="+id)
  }
  updateEmp(empD:employeeDto):Observable<any>
  {
    return this.httpClient.put("http://localhost/HrApi/api/Employee",empD)
  }
  
}
