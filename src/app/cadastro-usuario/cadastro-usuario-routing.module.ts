import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CadastrarUsuarioComponent, CadastroUsuarioComponent } from "./components";

export const CadastroUsuarioRoutes: Routes = [
  {
    path: 'cadastrousuario',
    component: CadastroUsuarioComponent,
    children: [{ path: '', component: CadastrarUsuarioComponent }]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(CadastroUsuarioRoutes) ],
  exports: [ RouterModule ]
})

export class CadastroUsuarioRoutingModule {
}
