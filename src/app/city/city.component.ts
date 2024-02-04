import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../Serves/city.service';
import { CountryService } from '../Serves/country.service';
import { countryDto } from '../model/Country';
import { cityDto } from '../model/City';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit
{

  form!:FormGroup

  constructor(private formbuilder:FormBuilder,private citySrvre:CityService,private CountrSer:CountryService){}

  listcountrydto!:countryDto[]

  ngOnInit(): void {
    this.form=this.formbuilder.group({
    txtName:['',Validators.required],
    txtCountry_id:['',Validators.required]
  })
  this.CountrSer.gteAllCountry().subscribe({
    next:data=>this.listcountrydto=data
  })
  }


  Save()
  {
    var cityd=new cityDto()
    
    cityd.name=this.form.value["txtName"]
    cityd.country_id=this.form.value["txtCountry_id"]

    this.citySrvre.insert(cityd).subscribe({
      next:data=>console.log("sucess"),
      error:err=>console.log(err)
    })
    


  }
}
