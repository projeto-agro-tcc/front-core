import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "../../../environments/environment";
import {CadastroPj} from "../models/cadastro-pj.models";

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

}
