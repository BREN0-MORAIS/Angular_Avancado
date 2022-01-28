import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const rootRouterConfig: Routes = [
  { path: "", component: ProdutoDashboardComponent },
];

@NgModule({
  /*
    criar o modulo de routes e passa ela como principal, e adicona o rootRouterConfig
     com parametro de rotas.
    */
  imports: [RouterModule.forChild(rootRouterConfig)],

  /*
    pra dicar acessivel para todos é necessário  adicionar no exports.
    */
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
