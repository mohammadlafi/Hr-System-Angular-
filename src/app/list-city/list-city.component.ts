import { Component, OnInit } from '@angular/core';
import { CityService } from '../Serves/city.service';
import { cityDto } from '../model/City';
import { CountryService } from '../Serves/country.service';
import { countryDto } from '../model/Country';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit{

  listCity!:cityDto[]
  listCountry!:countryDto[]
  form!:FormGroup

  constructor(private cityS:CityService,private CountryS:CountryService,private formbuilder:FormBuilder){}
  ngOnInit(): void {
      this.form=this.formbuilder.group({
        country_id:['']
      })
      this.CountryS.gteAllCountry().subscribe({
        next:data=>this.listCountry=data
      })
  }



  OnChange(){
    var coun=new countryDto()

    coun.id=this.form.value["country_id"]

    this.cityS.getCityBySearch(coun.id).subscribe({
      next:data=>this.listCity=data
    })
  }

  
}
