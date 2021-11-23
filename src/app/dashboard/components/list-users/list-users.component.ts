import { Component, OnInit, ViewChild } from '@angular/core';
import {Usuario} from "../../models";
import {DashboardService} from "../../services";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {DialogDeleteUsuarioComponent} from "../../../utils";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  showSpinner: boolean = false
  usuarios: Usuario[]
  dataSource: any
  displayColums: string[] = ['nome', 'email', 'empresa', 'action']

  @ViewChild(MatSort) sort: MatSort

  constructor(
    private dashService: DashboardService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
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
  }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 2000,
    });
  }

  searchBy(filterText: string){
    this.dataSource.filter = filterText.trim().toLowerCase()
  }

  viewUsuario(id){
    console.log(id)
  }

  deleteUsuario(usuario: Usuario){
    let dialogRef = this.dialog.open(DialogDeleteUsuarioComponent,
      {
        data: usuario,
        width: "500px",
        height: "200px"
      })
    dialogRef.afterClosed().subscribe(result => {
      this.showSpinner = true
      if(result=='true'){
        this.dashService.deleteUsuario(usuario.id)
          .subscribe(res => {
            this.showSpinner = false
            this.openSnackBar("Usuário deletado com sucesso", "success")
          }, error => {
            this.showSpinner = false
            this.openSnackBar("Problemas ao deletar usuário", "danger")
          })
      }
    })

  }

  editUsuario(id){
    console.log(id)
  }

}
