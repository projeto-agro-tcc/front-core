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

  getEmpresaById(id_empresa: string): Observable<any>{
    return this.http.get(`${env.baseUrl}empresas/${id_empresa}/`)
  }

  getUsuarios(): Observable<any>{
    return this.http.get(`${env.baseUrl}usuarios/`)
  }

  // Atraves do endpoint /empresas e retornado todas as estacoes que o usuario tem acesso
  getEstacoesbyEmpresas(): Observable<any>{
    return this.http.get(`${env.baseUrl}empresas/`)
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

  // ESSE ENDPOINT DEVE SER NO CORE
  getRealData(timetostart: number, timetoend: number, dev_id: string, v: string) {
    let u = 'http://localhost:8000/emw/samples?timetostart=1644701760&timetoend=1644838937&dev_id=f803320100027b40&var=temp'
    let s = "?timetostart="+timetostart+"&timetoend="+timetoend+"&dev_id="+dev_id+"&var="+v
    return this.http.get(u)
  }

}
