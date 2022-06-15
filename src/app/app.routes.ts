import { BarDiZonesComponent } from "./demos/bar-di-zones/bar-di-zones.component";
import { NgModule } from "@angular/core";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { RouterModule, Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { SobreComponent } from "./Institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { AuthGuard } from "src/services/app.guard";
import { CadastroGuard } from "src/services/cadastro.guard";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreComponent },
  { path: "bar", component: BarDiZonesComponent },
  { path: "fetures-data-binding", component: DataBindingComponent },
  {
    path: "cadastro",
    component: CadastroComponent,
    canDeactivate: [CadastroGuard],
  },

  {
    path: "produtos",
    loadChildren: () =>
      import("./demos/arquitetura-componentes/produto.module").then(
        (m) => m.ProdutoModule
      ), //abordagem lazy loading
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
    canLoad: [AuthGuard], //verifica se a pessoa tem autorização pra acessar a pagina [auth.guard em services]
    canActivate: [AuthGuard],
  },

  { path: "**", component: NotFoundComponent }, // caso o usuário escreva algo na url que não tenha na aplicação.
];

@NgModule({
  /*
  criar o modulo de routes e passa ela como principal, e adicona o rootRouterConfig
   com parametro de rotas.
  */
  imports: [RouterModule.forRoot(rootRouterConfig, { enableTracing: true })],
  /*enableTracing: true , habilita o log de rotas*/

  /*
  pra dicar acessivel para todos é necessário  adicionar no exports.
  */
  exports: [RouterModule],
})
export class appRoutingModule {}
