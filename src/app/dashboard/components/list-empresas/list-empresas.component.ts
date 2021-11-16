import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from "../../services";
import {Empresa} from "../../models";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {

  empresas: Empresa[]
  showSpinner: boolean = false
  displayColums: string[] = ['nome', 'cidade', 'action']
  dataSource: any

  @ViewChild(MatSort) sort: MatSort

  constructor(
    private dashService: DashboardService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.showSpinner = true
    this.dashService.getEmpresas()
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
  }

  searchBy(textFilter: string){
    console.log(textFilter)
    this.dataSource.filter = textFilter.trim().toLowerCase()
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
