import { Component } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //  serviceobj=new CalcService()
  constructor(private api:CalcService){}
}
 