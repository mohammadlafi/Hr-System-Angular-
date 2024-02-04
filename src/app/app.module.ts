import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { EmployeeComponent } from './employee/employee.component';
import { CityComponent } from './city/city.component';
import { DepartComponent } from './depart/depart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { ListCountryComponent } from './list-country/list-country.component';
import { ListCityComponent } from './list-city/list-city.component';
import { ListDeptComponent } from './list-dept/list-dept.component';
import { ListEmpComponent } from './list-emp/list-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    EmployeeComponent,
    CityComponent,
    DepartComponent,
    ListCountryComponent,
    ListCityComponent,
    ListDeptComponent,
    ListEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
