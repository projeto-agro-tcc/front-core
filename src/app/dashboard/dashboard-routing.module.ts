import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent, DashComponent } from "./components";
import {ProfileComponent} from "./components";
import {ListUsersComponent} from "./components";
import {ListEmpresasComponent} from "./components";
import {CadastroEmpresaComponent} from "./components";
import {ProfileEmpresaComponent} from "./components";
import {ListaEstacoesComponent} from "./components";
import {InfoEstacaoComponent} from "./components";
import {AiEstacaoComponent} from "./components/ai-estacao/ai-estacao.component";

export const DashRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'dash', component: DashComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'users', component: ListUsersComponent },
      { path: 'empresas', component: ListEmpresasComponent },
      { path: 'cadastro-empresa', component: CadastroEmpresaComponent },
      { path: 'profile-empresa', component: ProfileEmpresaComponent},
      { path: 'lista-estacoes', component: ListaEstacoesComponent},
      { path: 'info-estacao', component: InfoEstacaoComponent},
      { path: 'ai-estacao', component: AiEstacaoComponent}
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(DashRoutes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule {
}
