import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { AvatarModule } from "ngx-avatar";
import { LocalstorageService } from "../utils";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DashboardService } from "./services";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { CadastroEmpresaComponent,
  ProfileEmpresaComponent,
  ListUsersComponent,
  ListEmpresasComponent,
  DashboardComponent,
  ProfileComponent,
  ListaEstacoesComponent,
  InfoEstacaoComponent} from './components';
import { NgxMaskModule } from "ngx-mask";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import {NgxChartsModule} from "@swimlane/ngx-charts";



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ListUsersComponent,
    ListEmpresasComponent,
    CadastroEmpresaComponent,
    ProfileEmpresaComponent,
    ProfileEmpresaComponent,
    ListaEstacoesComponent,
    InfoEstacaoComponent
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
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTableModule,
    NgxMaskModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    NgxChartsModule
  ],
  providers: [
    LocalstorageService,
    DashboardService
  ]
})
export class DashboardModule { }
