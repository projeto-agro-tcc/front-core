import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  sair(){
    delete localStorage['token']
    this.router.navigate(['/'])
  }

  logar(){
    this.router.navigate(['/'])
  }

  autenticado(): boolean {
    return localStorage['token']
  }

  aboutUs(){
    console.log("About Us")
  }

  contactUs(){
    console.log("Contact us")
  }

}
