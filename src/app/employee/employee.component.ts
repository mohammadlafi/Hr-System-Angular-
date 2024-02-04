import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employeeDto } from '../model/Employee';
import { EmployeeService } from '../Serves/employee.service';
import { DeptService } from '../Serves/dept.service';
import { Dept } from '../model/Dept';
import { CountryService } from '../Serves/country.service';
import { countryDto } from '../model/Country';
import { CityService } from '../Serves/city.service';
import { cityDto } from '../model/City';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit
{

form!:FormGroup

constructor(private formbuilder:FormBuilder,
  private empServe:EmployeeService,
  private deptServer:DeptService,
  private CountrSer:CountryService,
  private cityServe:CityService,
  private activatedRoute:ActivatedRoute
  ){}
  
listDept!:Dept[]
listcountrydto!:countryDto[]
listcityydto!:cityDto[]
Emp!:employeeDto
nameButton!:string
x!:number
ngOnInit(): void 
{
  debugger
  
  this.x=this.activatedRoute.snapshot.queryParams["Id"]
    
    if(this.x!=undefined)
    {
     this.GetEmp(this.x)
     this.nameButton="Update"
    }else
    {
      this.nameButton="Save"
    }
    this.form=this.formbuilder.group({
      txtFName:['',Validators.required],
      txtLName:['',Validators.required],
      txtPhone:['',Validators.required],
      txtBod:['',Validators.required],
      country_id:['',Validators.required],
      dept_id:['',Validators.required],
      city_id:['',Validators.required],
      formPic:[''],
 
    })
    debugger
    this.deptServer.getDep().subscribe({
      next:data=>this.listDept=data
    })

    this.CountrSer.gteAllCountry().subscribe({
      next:data=>this.listcountrydto=data
    })

  
}

Save()
{
var empDto=new employeeDto();
debugger
empDto.fName=this.form.value["txtFName"];
empDto.lName=this.form.value["txtLName"];
empDto.phone=this.form.value["txtPhone"];
empDto.bod=this.form.value["txtBod"];
empDto.country_id=this.form.value["country_id"];
empDto.city_id=this.form.value["city_id"];
empDto.dept_id=this.form.value["dept_id"];

if(this.x ==undefined)
{
  this.empServe.insert(empDto).subscribe({
    next:data=>console.log("sucess"),
    error:err=>console.log(err)
  })
}else
{
  empDto.id=this.x
  this.empServe.updateEmp(empDto).subscribe({
    next:data=>console.log("succ"),
    error:err=>console.log(err)
  })
}


}

OnChange()
{
  var coun=new countryDto()

  coun.id=this.form.value["country_id"]

  this.cityServe.getCityBySearch(coun.id).subscribe({
    next:data=>this.listcityydto=data
  })
}

GetEmp(id:number)
{
  this.empServe.getEmp(id).subscribe({
    next:data=>{
      this.form.controls['txtFName'].setValue(data.fName)
      this.form.controls['txtLName'].setValue(data.lName)
      this.form.controls['txtPhone'].setValue(data.phone)
      this.form.controls['txtBod'].setValue(data.bod)
      this.form.controls['country_id'].setValue(data.country_id)
      this.form.controls['city_id'].setValue(data.city_id)
      this.form.controls['dept_id'].setValue(data.dept_id)
    },
 
  })
}

}
