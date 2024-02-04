import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeptService } from '../Serves/dept.service';
import { Dept } from '../model/Dept';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent implements OnInit{

  form!:FormGroup;

 
  constructor(private formbuilder:FormBuilder,private deptSer:DeptService){}

  ngOnInit(): void {
    this.form=this.formbuilder.group({
    txtName:['',Validators.required]
    })
  
  }
  
  Save()
  {
    var dept=new Dept()
    dept.name=this.form.value["txtName"]

    this.deptSer.insert(dept).subscribe({
      next:data=>console.log("sucss"),
      error:err=>console.log(err)
    })
  }


}
