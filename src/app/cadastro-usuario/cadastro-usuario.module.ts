import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { NgxMaskModule } from "ngx-mask";
import { ViaCepService } from "../utils";
import { CadastroUsuarioComponent, CadastrarUsuarioComponent } from "./components";
import { MatStepperModule } from "@angular/material/stepper";
import { CadastroUsuarioService } from "./services";



@NgModule({
  declarations: [
    CadastrarUsuarioComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatButtonModule,
    MatStepperModule,
    NgxMaskModule
  ],
  providers: [
    ViaCepService,
    CadastroUsuarioService
  ]
})
export class CadastroUsuarioModule { }
