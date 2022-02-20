import { Component, OnInit } from '@angular/core';
import {LocalstorageService, LocalUser} from "../../../utils";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Estacao} from "../../models/estacao.models";
import {DashboardService} from "../../services";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {Empresa} from "../../models";

@Component({
  selector: 'app-lista-estacoes',
  templateUrl: './lista-estacoes.component.html',
  styleUrls: ['./lista-estacoes.component.css']
})
export class ListaEstacoesComponent implements OnInit {

  localUser: LocalUser
  empresas: Empresa[]
  showSpinner: boolean = false
  dataSource: any
  public estacoes: any[];

  constructor(
    private observer: BreakpointObserver,
    private localStorageService: LocalstorageService,
    private router: Router,
    private dashService: DashboardService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.showSpinner = true
    this.localUser = this.localStorageService.getLocalUser()
    this.dashService.getEstacoesbyEmpresas()
      .subscribe(res => {
          this.empresas = res
          this.estacoes = this.formatEstacoes(res)
          console.log(this.estacoes)
          this.dataSource = new MatTableDataSource(this.empresas)
          this.showSpinner = false
          this.openSnackBar("Estações carregadas com sucesso", "success")
        },
        error => {
          this.openSnackBar("Problemas ao carregar estações", "danger")
          this.showSpinner = false
        })
  }

  pageInfoEstacao(estacao_id: string, estacao_empresa: string) {
    this.router.navigate(['/dashboard/info-estacao', {dev_id:estacao_id, dev_empresa:estacao_empresa}])
  }

  pageEditEstacao() { this.openSnackBar("Funcionalidade ainda não implementada ;)", "danger") }

  pageAIEstacao(estacao_id: string, estacao_empresa: string) {
    this.router.navigate(['/dashboard/ai-estacao', {dev_id:estacao_id, dev_empresa:estacao_empresa}])
  }

  formatEstacoes(res: any) {
    const estacoes = []
    for (let i of res) {
      const e = i.estacoes
      for (let j of e) {
        const est = {serial_number: j.serial_number, latitude: j.latitude, longitude: j.longitude, est_modelo: j.estacao_modelo, empresa: i.nome}
        estacoes.push(est)
      }
    }
    return estacoes
  }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 3000,
    });
  }

}
