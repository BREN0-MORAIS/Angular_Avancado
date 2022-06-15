import { BarServices } from "./demos/bar-di-zones/bar.services";
import { NgModule, Provider } from "@angular/core";
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
import { AdminRoutingModule } from "./admin/admin.route";
import { AuthGuard } from "src/services/app.guard";
import { BarDiZonesComponent } from "./demos/bar-di-zones/bar-di-zones.component";
import { BarDiZonesModule } from "./demos/bar-di-zones/bar-di-zones.module";

export const BAR_PROVIDERS: Provider[] = [BarServices];

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
    BarDiZonesComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    appRoutingModule,
    NavegacaoModule,
    ProdutoModule,
    AdminRoutingModule, //para  poder pegar dados do formulário é necessário importar [módulo importado]
    // [RouterModule.forRoot(rootRouterConfig, { useHash: false })],-> substituido
    BarDiZonesModule,
  ],
  providers: [
    AuthGuard,
    // BAR_PROVIDERS
    // BarServices, -> essa é umas das formas de registrar o serviço
    // { provide: APP_BASE_HREF, useValue: "/" }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
