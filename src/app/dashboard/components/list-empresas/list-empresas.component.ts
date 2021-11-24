import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from "../../services";
import {Empresa} from "../../models";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {LocalstorageService, LocalUser, DialogDeleteEmpresaComponent} from "../../../utils";
import {MatDialog} from "@angular/material/dialog";

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
  localUser : LocalUser

  @ViewChild(MatSort) sort: MatSort

  constructor(
    private dashService: DashboardService,
    private snackBar: MatSnackBar,
    private router: Router,
    private localStorageService: LocalstorageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.showSpinner = true
    this.localUser = this.localStorageService.getLocalUser()
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

  viewEmpresa(empresa: Empresa){
    this.router.navigate(['/dashboard/profile-empresa', {id_empresa:empresa.id}])
  }

  editEmpresa(empresa: Empresa){
    console.log(empresa)
  }

  deleteEmpresa(empresa: Empresa){
    let dialogRef = this.dialog.open(DialogDeleteEmpresaComponent,
      {
        data: empresa,
        width: "500px",
        height: "200px"
      })
    dialogRef.afterClosed().subscribe(result => {
      if(result=='true'){
        this.dashService.deletarEmpresa(empresa.id)
          .subscribe(res => {
            this.openSnackBar("Empresas deletada com sucesso", "success")
          }, error => {
            this.openSnackBar("Problemas ao deletar empresa", "danger")
          })
      }
    })
  }

  adicionarEmpresa(){
    this.router.navigateByUrl('/dashboard/cadastro-empresa')
  }

}
