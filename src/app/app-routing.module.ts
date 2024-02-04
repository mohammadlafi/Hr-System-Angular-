import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { EmployeeComponent } from './employee/employee.component';
import { CityComponent } from './city/city.component';
import { DepartComponent } from './depart/depart.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { ListCityComponent } from './list-city/list-city.component';
import { ListDeptComponent } from './list-dept/list-dept.component';
import { ListEmpComponent } from './list-emp/list-emp.component';

const routes: Routes = [
  {path:'NewCountry',component:CountryComponent},
  {path:'NewEmployee',component:EmployeeComponent},
  {path:'NewCity',component:CityComponent},
  {path:'NewDepart',component:DepartComponent},
  {path:'ListCountry',component:ListCountryComponent},
  {path:'ListCity',component:ListCityComponent},
  {path:'ListDept',component:ListDeptComponent},
  {path:'ListEmp',component:ListEmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
