import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";
import { delay } from "rxjs/operators";
import {LocalstorageService, LocalUser} from "../../utils";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dash',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  showSpinner = false
  localUser: LocalUser

  constructor(
    private observer: BreakpointObserver,
    private localStorageService: LocalstorageService,
    private router: Router,
  ) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  profile(){
    this.router.navigateByUrl('/dashboard/profile')
  }

  pageUsers(){
    this.router.navigateByUrl('/dashboard/users')
  }

  pageEmpresas(){
    this.router.navigateByUrl('/dashboard/empresas')
  }

  pageListaEstacoes(){
    this.router.navigateByUrl('/dashboard/lista-estacoes')
  }

  ngOnInit(): void {
    this.showSpinner = true
    this.localUser = this.localStorageService.getLocalUser()
    this.showSpinner = false
  }

}
