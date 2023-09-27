import { Component } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
//  calobj=new CalcService()
constructor(private api:CalcService){}
}
