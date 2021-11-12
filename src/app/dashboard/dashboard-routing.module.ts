import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent, DashComponent } from "./components";

export const DashRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{ path: '', component: DashComponent }]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(DashRoutes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule {
}
