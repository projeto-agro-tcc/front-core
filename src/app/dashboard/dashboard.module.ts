import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent, DashComponent } from "./components";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { AvatarModule } from "ngx-avatar";
import {LocalstorageService} from "../utils";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {DashboardService} from "./services/dashboard.service";
import {CadastroUsuarioModule} from "../cadastro-usuario";


@NgModule({
  declarations: [
    DashboardComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    AvatarModule,
    MatProgressSpinnerModule,
    CadastroUsuarioModule,
  ],
  providers: [
    LocalstorageService,
    DashboardService
  ]
})
export class DashboardModule { }
