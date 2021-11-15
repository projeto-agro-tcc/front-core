import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "../../../environments/environment";
import {Empresa} from "../models";

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





}
