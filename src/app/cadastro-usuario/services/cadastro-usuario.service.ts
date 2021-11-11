import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment as env } from '../../../environments/environment'
import { HttpClient } from "@angular/common/http";
import {CadastroUsuario} from "../components";

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  private readonly PATH: string = 'usuarios/'

  constructor(
    private http: HttpClient
  ) { }

  cadastrarUsuario(cadastroUsuario: CadastroUsuario): Observable<any>{
    return this.http.post(env.baseUrl + this.PATH, cadastroUsuario)
  }

}
