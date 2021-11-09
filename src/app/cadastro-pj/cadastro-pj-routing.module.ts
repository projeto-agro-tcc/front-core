import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CadastrarPjComponent, CadastroPjComponent } from "./components";

export const CadastroPjRoutes: Routes = [
  {
    path: 'cadastropj',
    component: CadastroPjComponent,
    children: [{ path: '', component: CadastrarPjComponent }]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(CadastroPjRoutes) ],
  exports: [ RouterModule ]
})

export class CadastroPjRoutingModule {
}
