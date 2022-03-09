import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";
import { AppComponent } from "./app.component";
import { SobreComponent } from "./Institucional/sobre/sobre.component";
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { appRoutingModule, rootRouterConfig } from "./app.routes";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavegacaoModule } from "./navegacao/navegacao.module";
import { ProdutoModule } from "./demos/arquitetura-componentes/produto.module";
@NgModule({
  declarations: [
    AppComponent,
    // MenuComponent,
    // HomeComponent,
    // FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRoutingModule,
    NavegacaoModule,
    ProdutoModule, //para  poder pegar dados do formulário é necessário importar [módulo importado]
    // [RouterModule.forRoot(rootRouterConfig, { useHash: false })],-> substituido
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
