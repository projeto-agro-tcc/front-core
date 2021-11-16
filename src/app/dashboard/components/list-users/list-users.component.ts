import { Component, OnInit, ViewChild } from '@angular/core';
import {Usuario} from "../../models";
import {DashboardService} from "../../services";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

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

  deleteUsuario(id){
    console.log(id)
  }

  editUsuario(id){
    console.log(id)
  }

}
