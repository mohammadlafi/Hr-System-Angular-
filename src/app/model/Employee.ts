import { cityDto } from "./City";
import { countryDto } from "./Country";
import { Dept } from "./Dept";

export class employeeDto
{
    id!:number
    fName!:string;
    lName!:string;
    phone!:string;
    bod!:Date;
    country_id!:number;
    city_id!:number;
    dept_id!:number;
    country!:countryDto
    city!:cityDto
    departemnt!:Dept
    formPic!:File
} 