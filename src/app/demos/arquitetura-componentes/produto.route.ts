import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoAppComponet } from "./produto.app.component";

export const rootRouterConfig: Routes = [
  {
    /*depois de ter criado o componente pai 
    ProdutoAppComponent é necessário linkar e importar o componente*/
    path: "",
    component: ProdutoAppComponet,
    children: [
      { path: "", component: ProdutoDashboardComponent },
      //rota filha da rota principal evita dar problema de roteaamento

      /*para que possa funcionar é necessário criar  um arquivo ts 
      com produto.app.componet.ts e criar um seletor de template e adicionar o router-outlet
      e depois nas declarations adicionar o componet por exemplo ProdutoAppComponent 
      */
      { path: "editar/:id", component: EditarProdutoComponent },
    ],
  },

  //=> rota antiga
  // { path: "editar/:id", component: EditarProdutoComponent },

  /*passando parametros para outro componete dessa forma 'editar/:id' 
   para qualquer tipo consegue esta passando dados via url para outra componente

  { path: "editar/:id:categoria", component: EditarProdutoComponent },
  ===================================================================
  */
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
