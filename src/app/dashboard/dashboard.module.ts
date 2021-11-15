import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent, DashComponent } from "./components";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { ProfileComponent } from './components/profile/profile.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    DashboardComponent,
    DashComponent,
    ProfileComponent,
    ListUsersComponent,
    ListEmpresasComponent
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
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [
    LocalstorageService,
    DashboardService
  ]
})
export class DashboardModule { }
