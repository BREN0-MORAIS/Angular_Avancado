import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./navegacao/menu/menu.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { FooterComponent } from "./navegacao/footer/footer.component";
import { SobreComponent } from "./Institucional/sobre/sobre.component";
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { RouterModule } from "@angular/router";
import { appRoutingModule, rootRouterConfig } from "./app.routes";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NavegacaoModule } from "./navegacao/navegacao.module";

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
    NavegacaoModule, //para  poder pegar dados do formulário é necessário importar [módulo importado]
    // [RouterModule.forRoot(rootRouterConfig, { useHash: false })],-> substituido
    appRoutingModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
