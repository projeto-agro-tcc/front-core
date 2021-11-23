import { Component, Input, OnInit } from '@angular/core';
import { Empresa } from "../../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile-empresa',
  templateUrl: './profile-empresa.component.html',
  styleUrls: ['./profile-empresa.component.css']
})
export class ProfileEmpresaComponent implements OnInit {

  empresa: Empresa
  showSpinner: boolean = false

  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showSpinner = true
    this.activeRouter.params.subscribe((res: Empresa) => {
      this.empresa = res
    })
  }

  /*
  this.showSpinner = true
    this.dashService.getUsuarios()
      .subscribe(res => {
          this.usuarios = res
          this.showSpinner = false
          this.dataSource = new MatTableDataSource(this.usuarios)
          this.dataSource.sort = this.sort
          this.openSnackBar("Usuários carregadas com sucesso", "success")
        },
        error => {
          this.openSnackBar("Problemas ao carregar usuarios", "danger")
          this.showSpinner = false
        })
   */

}
