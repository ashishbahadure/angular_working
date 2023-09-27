import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nilesh_sir_routing';

  componet_name:string="";
  
  openComponent(cname:string){
    this.componet_name=cname;
  }
}
   