import { ProdutoAppComponet } from "./produto.app.component";
import { CatalogoComponent } from "./componets/produto-componentes/catalago.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { NgModule } from "@angular/core";
import { NavegacaoModule } from "src/app/navegacao/navegacao.module";
import { ProdutoRoutingModule } from "./produto.route";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    CatalogoComponent,
    EditarProdutoComponent,
    ProdutoAppComponet,
  ],

  imports: [CommonModule, RouterModule, ProdutoRoutingModule],
  exports: [ProdutoAppComponet],
})
export class ProdutoModule {}
