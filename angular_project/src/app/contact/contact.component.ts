import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 arr =[
   {"img":'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',"number":'89+', "project":"finished"},    //1st object
   {"img":'./assets/ashish.png',"number":'12352+', "project":"sensor deployed"},    //1st object
   {"img":'ashish.png',"number":'25+', "project":"Products"},    //1st object
   {"img":'ashish.png',"number":'100+', "project":"projects"},    //1st object
   ]

   obj={
    name:"ashsih",mobile:91129902098
   };
   constructor(){
   console.log(this.obj.name);
   }
}
