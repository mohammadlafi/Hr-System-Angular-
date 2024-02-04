import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../Serves/country.service';
import { countryDto } from '../model/Country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{

  form!:FormGroup
  constructor(private formbulider:FormBuilder,private countryServe:CountryService){}

  ngOnInit(): void {
    this.form=this.formbulider.group({
    txtName:['',Validators.required],
  })  
  }

  Save()
  {
 
    var countryD=new countryDto()
      debugger
    countryD.name=this.form.value['txtName']
    this.countryServe.insert(countryD).subscribe({
      next:data=>console.log('Sucess'),
      error:err=>console.log(err)
    })
  }


}
