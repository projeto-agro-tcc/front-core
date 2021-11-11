import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "../../../../environments/environment";
import { Login } from "../models";
import { LocalstorageService, LocalUser } from "../../../utils";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) { }

  logar(login: Login): Observable<any>{
    return this.http.post(
      `${env.baseUrl}auth/`,
      login,
      {
        observe: 'response',
        responseType: 'text'
      })
  }

  successfulLogin(data : string){
    let tok = JSON.parse(data).token
    let email = JSON.parse(data).email
    let username = JSON.parse(data).username
    let groups = JSON.parse(data).groups
    let user : LocalUser = {
      token: tok,
      username: username,
      email: email,
      groups: groups
    }
    this.localStorageService.setLocalUser(user)
  }

  logout(){
    this.localStorageService.setLocalUser(null)
  }

}
