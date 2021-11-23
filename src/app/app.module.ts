import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { NgxMaskModule } from "ngx-mask";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CadastroUsuarioModule,
  CadastroUsuarioRoutingModule } from "./cadastro-usuario";
import { DashboardRoutingModule,
  DashboardModule } from "./dashboard";
import { LoginModule,
  LoginRoutingModule } from "./auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogDeleteEmpresaComponent,
  DialogDeleteUsuarioComponent,
  AuthInterceptorProviders,
  LocalstorageService} from './utils';
import { AvatarModule } from "ngx-avatar";



@NgModule({
  declarations: [
    AppComponent,
    DialogDeleteEmpresaComponent,
    DialogDeleteUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    LoginModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    DashboardModule,
    LoginRoutingModule,
    NgxMaskModule.forRoot(),
    CadastroUsuarioModule,
    CadastroUsuarioRoutingModule,
    DashboardRoutingModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    AvatarModule,
  ],
  providers: [
    LocalstorageService,
    AuthInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
