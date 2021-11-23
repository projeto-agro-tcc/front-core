import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "../../../environments/environment";
import {CadastroPj} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getEmpresas(): Observable<any>{
    return this.http.get(`${env.baseUrl}empresas/`)
  }

  cadastrarEmpresa(cadastroPj: CadastroPj): Observable<any>{
    return this.http.post(`${env.baseUrl}empresas/`, cadastroPj)
  }

  deletarEmpresa(id: string): Observable<any>{
    return this.http.delete(`${env.baseUrl}empresas/${id}`)
  }

  getUsuarios(): Observable<any>{
    return this.http.get(`${env.baseUrl}usuarios/`)
  }

  // getUsuarioByUsername(username: string): Observable<any>{
  //   console.log("Get usuário by username " + username)
  // }

  getUsuariosByEmpresa(id_empresa: string){
    console.log("get usuarios by empresa")
  }

  deleteUsuario(id: string){
    return this.http.delete(`${env.baseUrl}usuarios/${id}`)
  }

}
