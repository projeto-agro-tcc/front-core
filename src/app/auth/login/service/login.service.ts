import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "../../../../environments/environment";
import { Login } from "../models";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private PATH: string = 'auth'

  constructor(
    private http: HttpClient
  ) { }

  logar(login: Login): Observable<any>{
    return this.http.post(env.baseUrl + this.PATH, login)
  }

}
