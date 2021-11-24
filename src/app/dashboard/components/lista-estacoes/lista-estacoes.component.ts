import { Component, OnInit } from '@angular/core';
import {LocalstorageService, LocalUser} from "../../../utils";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-estacoes',
  templateUrl: './lista-estacoes.component.html',
  styleUrls: ['./lista-estacoes.component.css']
})
export class ListaEstacoesComponent implements OnInit {
  localUser: LocalUser

  constructor(
    private observer: BreakpointObserver,
    private localStorageService: LocalstorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  pageInfoEstacao() {
    this.router.navigateByUrl('/dashboard/info-estacao')
  }

  pageEditEstacao() {}

}
