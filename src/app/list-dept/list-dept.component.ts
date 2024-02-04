import { Component, OnInit } from '@angular/core';
import { DeptService } from '../Serves/dept.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dept } from '../model/Dept';

@Component({
  selector: 'app-list-dept',
  templateUrl: './list-dept.component.html',
  styleUrls: ['./list-dept.component.css']
})
export class ListDeptComponent implements OnInit {

  
  listdept!:Dept[]
  constructor(private dept:DeptService){}

  ngOnInit(): void {
      this.dept.getDep().subscribe({
        next:data=>this.listdept=data,
      })
  }
  
}
