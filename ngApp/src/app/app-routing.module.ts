import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { login Component } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'login',
    component: 'logincomponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
