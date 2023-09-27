import { Component } from '@angular/core';

@Component({
  selector: 'app-id-use-angular',
  templateUrl: './id-use-angular.component.html',
  styleUrls: ['./id-use-angular.component.scss']
})
export class IdUseAngularComponent {


showalert(elmt:any)
{
  alert(elmt.value)
}
arr:any=[];

inserData(name:any,mobile:any,email:any){
  var n=name.value;
  var m=mobile.value;
  var e=email.value;
  this.arr.push({"name":n,"mobile":m,"email":e});
}

removeRow(i:any)
{
  this.arr.splice(i,1);
  // delete this.arr[i];
}

}
