import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  employees:any = [
    {name:"kishor", email:"k@gmail.com"},
    {name:"Kuldeep", email:"kj@gmail.com"},
    {name:"Suresh", email:"s@gmail.com"}
  ]
  constructor() { }

  
}
