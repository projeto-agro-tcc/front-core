import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent, DashComponent } from "./components";
import {ProfileComponent} from "./components/profile/profile.component";
import {ListUsersComponent} from "./components/list-users/list-users.component";
import {ListEmpresasComponent} from "./components/list-empresas/list-empresas.component";

export const DashRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'dash', component: DashComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'users', component: ListUsersComponent },
      { path: 'empresas', component: ListEmpresasComponent }
    ]

  }
]

@NgModule({
  imports: [ RouterModule.forChild(DashRoutes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule {
}
