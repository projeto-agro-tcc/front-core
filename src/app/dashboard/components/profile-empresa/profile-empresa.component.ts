import { Component, Input, OnInit } from '@angular/core';
import {Empresa, Endereco, Telefone} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {DashboardService} from "../../services";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile-empresa',
  templateUrl: './profile-empresa.component.html',
  styleUrls: ['./profile-empresa.component.css']
})
export class ProfileEmpresaComponent implements OnInit {

  empresa: Empresa={
    id: "",
    nome: "",
    email: "",
    cnpj: "",
    razao_social: "",
    web_site: "",
    telefone: {
      residencial: "",
      celular: "",
      outro: ""
    },
    endereco: {
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      cep: "",
      uf: ""
    }
  }
  showSpinner: boolean = false

  constructor(
    private activeRouter: ActivatedRoute,
    private dashboardService: DashboardService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.showSpinner = true
    this.activeRouter.params.subscribe((res: any) => {
      this.dashboardService.getEmpresaById(res.id_empresa)
        .subscribe(res => {
          this.empresa = res
          this.openSnackBar("Empresa carregadas com sucesso", "success")
        }, error => {
          this.openSnackBar("Problemas ao carregar empresa", "danger")
        })
    })
  }
    /*
    .subscribe(res => {
        this.empresas = res
        this.dataSource = new MatTableDataSource(this.empresas)
        this.showSpinner = false
          this.openSnackBar("Empresas carregadas com sucesso", "success")
      },
        error => {
          this.openSnackBar("Problemas ao carregar empresas", "danger")
          this.showSpinner = false
        })
     */




  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 2000,
    });
  }
}
