import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
num=0;
  constructor()
{
  setInterval(()=> {
this.num++
  },2000)
}

  showAddtion(msg:any,n1:any) {
  // document.write(msg);
  alert(msg+n1)
}
username:string="no user name";
SetName(name:string){
  this.username=name;
}
color:any="red";
setusername(elmt:any)
{
this.username=elmt.target.value;
this.color=elmt.target.value;
}
}
