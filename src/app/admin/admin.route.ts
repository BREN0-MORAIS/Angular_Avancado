import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
export const rootRouterConfig: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rootRouterConfig)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
