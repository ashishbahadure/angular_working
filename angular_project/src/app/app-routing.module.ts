import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PracticeComponent } from './practice/practice.component';
import { IdUseAngularComponent } from './id-use-angular/id-use-angular.component';
const routes: Routes = [
  {
    component:AboutComponent,
    path:"about",
  },
  {
    component:HomeComponent,
    path:"home",
  },
  {
    component:ContactComponent,
    path:"contact",
  },
  {
    component:IdUseAngularComponent,
    path:"id-use-angular"
  }
  ,
  {
    component:PracticeComponent,
    path:"practice",
    children:[
      {
        path:'home',
        component:HomeComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
