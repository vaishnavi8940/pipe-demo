import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeDemo';

  products:any = [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","category":"women's clothing","image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg","rating":{"rate":3.6,"count":145}}]

  presentDate = new Date();

  tdate = this.presentDate.getDate();

  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];

  price = 20000;

  employees:any = [
    {name:"kishor", email:"k@gmail.com"},
    {name:"Kuldeep", email:"kj@gmail.com"},
    {name:"Suresh", email:"s@gmail.com"}
  ]
}
