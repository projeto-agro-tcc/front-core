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
  InfoEstacaoComponent, } from './components';
import { AiEstacaoComponent } from './components/ai-estacao/ai-estacao.component';
import { NgxMaskModule } from "ngx-mask";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule} from "ng2-charts";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

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
    InfoEstacaoComponent,
    AiEstacaoComponent
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
        BrowserModule,
        BrowserAnimationsModule,
        ChartsModule,
        MatMenuModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
  providers: [
    LocalstorageService,
    DashboardService
  ]
})
export class DashboardModule { }
