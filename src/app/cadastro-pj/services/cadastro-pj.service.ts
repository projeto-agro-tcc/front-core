import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CadastroPj } from "../components";
import { Observable } from "rxjs";
import { environment as env } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CadastroPJService {

  private readonly PATH: string = 'empresas/'

  constructor(
    private http: HttpClient
  ) { }

  cadastrarpj(cadastroPj: CadastroPj): Observable<any>{
    return this.http.post(env.baseUrl + this.PATH, cadastroPj)
  }

}
