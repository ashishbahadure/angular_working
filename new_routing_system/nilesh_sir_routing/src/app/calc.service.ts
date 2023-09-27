import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private http:HttpClient) { }
getPostData(){
this.http.get("http://localhost:3000/posts")
    
}
  add(a:any,b:any)
  {
    return a+b;
  }
}
