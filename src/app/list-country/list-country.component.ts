import { Component, OnInit } from '@angular/core';
import { CountryService } from '../Serves/country.service';
import { countryDto } from '../model/Country';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit{

  constructor(private countrySer:CountryService){}

  listCountry!:countryDto[]

  ngOnInit(): void {
    debugger
      this.countrySer.gteAllCountry().subscribe({
        
        next:data=>this.listCountry=data
      })
  }
}
