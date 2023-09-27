import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
 value=false;

 setValue(event:any) 
 {
  this.value=event.target.value;
 }

 arr=[
  "a","b","c","d","e","f"
 ]

 
 data=[
  {
  "id": 1,
  "email": "george.bluth@reqres.in",
  "first_name": "George",
  "last_name": "Bluth",
  "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
  "id": 2,
  "email": "janet.weaver@reqres.in",
  "first_name": "Janet",
  "last_name": "Weaver",
  "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
  "id": 3,
  "email": "emma.wong@reqres.in",
  "first_name": "Emma",
  "last_name": "Wong",
  "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
  "id": 4,
  "email": "eve.holt@reqres.in",
  "first_name": "Eve",
  "last_name": "Holt",
  "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
  "id": 5,
  "email": "charles.morris@reqres.in",
  "first_name": "Charles",
  "last_name": "Morris",
  "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
  "id": 6,
  "email": "tracey.ramos@reqres.in",
  "first_name": "Tracey",
  "last_name": "Ramos",
  "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
  ]
 



  myclass={
    "bg-danger":true,
    "text-primary":true,
    "h-100":true,
    "p-5":true,
  };

  mycss={"background-color":"yellow","font-size":"100px","margin-top":"40px"};

  

}
