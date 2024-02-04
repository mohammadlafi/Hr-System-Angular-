import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../Serves/employee.service';
import { employeeDto } from '../model/Employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit{

  form!:FormGroup

  constructor(private formbuilder:FormBuilder,private employeeServe:EmployeeService,private route:Router){}

  listEmployee!:employeeDto[]

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      txtName:['',Validators.required]
    })
  }

Search()
{
  var employee=new employeeDto()
  employee.fName=this.form.value["txtName"];

  this.employeeServe.getBySearch(employee.fName).subscribe({
    next:data=>this.listEmployee=data
  })
}
DeleteEmp(id:number)
{
  debugger
  this.employeeServe.dleteEmp(id).subscribe(({
    next:data=>{console.log("sucess")
    this.Search()
  },
    error:err=>console.log(err)
  }))

}
EditEmp(id:number)
{
  this.route.navigate(['/NewEmployee'],{queryParams:{Id:id}})
}

}
