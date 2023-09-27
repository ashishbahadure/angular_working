import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // arr =[
  //   {"img":'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',"number":'89+', "project":"finished"},    //1st object
  //   {"img":'./assets/ashish.png',"number":'12352+', "project":"sensor deployed"},    //1st object
  //   {"img":'ashish.png',"number":'25+', "project":"Products"},    //1st object
  //   {"img":'ashish.png',"number":'100+', "project":"projects"},    //1st object
  // ]
  
  height:number=100;
  color:string="red";

  setcolor(elmt:any)
  {
    this.color=elmt.target.value;
  }
  increaseHeight(){
    this.height++;
  }
  decreaseHeight(){
    this.height--;
  }


  mymenu:boolean=true;
  HideShow(){
this.mymenu=!this.mymenu;
  }
  
}
