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

  getEstacoesbyEmpresas(): Observable<any>{
    return this.http.get(`${env.baseUrl}empresas/`)
  }

  getUsuariosByEmpresa(id_empresa: string){
    console.log("get usuarios by empresa")
  }

  deleteUsuario(id: string){
    return this.http.delete(`${env.baseUrl}usuarios/${id}`)
  }

  getRealData6hour(timetostart: number, timetoend: number, dev_id: string, v: string) {
    let s = "?timetostart="+timetostart+"&timetoend="+timetoend+"&dev_id="+dev_id+"&var="+v
    return this.http.get(`${env.baseUrl}emw/samples`+s)
  }

  getForecast2daysLSTM(timetoend: number, dev_id: string, v: string, typeforescast: string) {
    let s = "?timetoend="+timetoend+"&dev_id="+dev_id+"&var="+v+"&typeforecast="+typeforescast
    return this.http.get(`${env.baseUrl}emw/prediction`+s)
  }

}
