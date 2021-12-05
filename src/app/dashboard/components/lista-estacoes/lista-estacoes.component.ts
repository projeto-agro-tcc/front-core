import { Component, OnInit } from '@angular/core';
import {LocalstorageService, LocalUser} from "../../../utils";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Estacao} from "../../models/estacao.models";
import {DashboardService} from "../../services";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-lista-estacoes',
  templateUrl: './lista-estacoes.component.html',
  styleUrls: ['./lista-estacoes.component.css']
})
export class ListaEstacoesComponent implements OnInit {

  localUser: LocalUser
  estacoes: Estacao[]
  showSpinner: boolean = false
  dataSource: any

  constructor(
    private observer: BreakpointObserver,
    private localStorageService: LocalstorageService,
    private router: Router,
    private dashService: DashboardService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.showSpinner = true
    this.localUser = this.localStorageService.getLocalUser()
    this.dashService.getEstacoes()
      .subscribe(res => {
          this.estacoes = res
          this.dataSource = new MatTableDataSource(this.estacoes)
          this.showSpinner = false
          this.openSnackBar("Estações carregadas com sucesso", "success")
        },
        error => {
          this.openSnackBar("Problemas ao carregar estações", "danger")
          this.showSpinner = false
        })
  }

  pageInfoEstacao() {
    this.router.navigateByUrl('/dashboard/info-estacao')
  }

  pageEditEstacao() { this.openSnackBar("Funcionalidade ainda não implementada ;)", "danger") }

  pageMapaEstacao() { this.openSnackBar("Funcionalidade ainda não implementada ;)", "danger") }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 2000,
    });
  }

}
