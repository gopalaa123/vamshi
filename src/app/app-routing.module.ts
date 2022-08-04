import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingingComponent } from './singing/singing.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registarion',
    component: SingingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
