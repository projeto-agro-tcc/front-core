import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components";
import {ProfileComponent} from "./components";
import {ListUsersComponent} from "./components";
import {ListEmpresasComponent} from "./components";
import {CadastroEmpresaComponent} from "./components";
import {ProfileEmpresaComponent} from "./components";
import {ListaEstacoesComponent} from "./components";
import {InfoEstacaoComponent} from "./components";

export const DashRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'users', component: ListUsersComponent },
      { path: 'empresas', component: ListEmpresasComponent },
      { path: 'cadastro-empresa', component: CadastroEmpresaComponent },
      { path: 'profile-empresa', component: ProfileEmpresaComponent},
      { path: 'lista-estacoes', component: ListaEstacoesComponent},
      { path: 'info-estacao', component: InfoEstacaoComponent}
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(DashRoutes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule {
}
