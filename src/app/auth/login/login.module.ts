import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogarComponent, LoginComponent} from './components';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LoginModule { }