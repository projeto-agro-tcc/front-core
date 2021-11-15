import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DashboardService} from "../../services";
import {Empresa} from "../../models";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {

  empresas: Empresa[]
  form: FormGroup
  showSpinner: boolean = false

  displayColums: string[] = ['nome', 'cidade', 'action']

  constructor(
    private fb: FormBuilder,
    private dashService: DashboardService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.form = this.fb.group({
      findby: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.showSpinner = true
    this.dashService.getEmpresas()
      .subscribe(res => {
        this.empresas = res
        this.showSpinner = false
          this.openSnackBar("Empresas carregadas com sucesso", "success")
      },
        error => {
          this.openSnackBar("Problemas ao carregar empresas", "danger")
          this.showSpinner = false
        })
  }

  searchBy(){
    this.form.valueChanges.subscribe(val=> {
      console.log(val)
    })
  }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 2000,
    });
  }

  viewEmpresa(id: string){
    console.log(id)
  }

  editEmpresa(id: string){
    console.log(id)
  }

  deleteEmpresa(id: string){
    this.dashService.deletarEmpresa(id)
      .subscribe(res => {
        this.openSnackBar("Empresas deletada com sucesso", "success")
      }, error => {
        this.openSnackBar("Problemas ao deletar empresa", "danger")
      })
  }

  adicionarEmpresa(){
    this.router.navigateByUrl('/dashboard/cadastro-empresa')
  }

}
