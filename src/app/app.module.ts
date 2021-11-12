import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { LoginModule, LoginRoutingModule } from "./auth";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { CadastroPjModule } from "./cadastro-pj";
import { CadastroPjRoutingModule } from "./cadastro-pj";
import { NgxMaskModule } from "ngx-mask";
import {CadastroUsuarioModule, CadastroUsuarioRoutingModule} from "./cadastro-usuario";
import { AuthInterceptorProviders, LocalstorageService } from "./utils";
import {DashboardModule} from "./dashboard";
import {DashboardRoutingModule} from "./dashboard/dashboard-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [
    AppComponent
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
        CadastroPjModule,
        DashboardModule,
        CadastroPjRoutingModule,
        LoginRoutingModule,
        NgxMaskModule.forRoot(),
        CadastroUsuarioModule,
        CadastroUsuarioRoutingModule,
        DashboardRoutingModule,
        AppRoutingModule,
    ],
  providers: [
    LocalstorageService,
    AuthInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
