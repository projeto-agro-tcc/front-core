import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalstorageService, LocalUser} from "./utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  localUser: LocalUser

  constructor(
    private router: Router,
    private localStorageService: LocalstorageService)
  {}

  sair(){
    delete localStorage['localUserMonitoramento']
    this.router.navigate(['/'])
  }

  logar(){
    this.router.navigate(['/'])
  }

  autenticado(): boolean {
    this.localUser = this.localStorageService.getLocalUser()
    return localStorage['localUserMonitoramento']
  }

  aboutUs(){
    console.log("About Us")
  }

  contactUs(){
    console.log("Contact us")
  }

  ngOnInit(): void {
    this.localUser = this.localStorageService.getLocalUser()
  }

}
