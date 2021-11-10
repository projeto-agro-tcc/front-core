import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnderecoDto } from '../models/endereco.dto';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment'

@Injectable()
export class ViaCepService {

  constructor(private http: HttpClient) {
  }

  getAdress(cep: String): Observable<EnderecoDto>{
    return this.http.get<EnderecoDto>(env.viacepURL+cep+env.json)
  }

}
