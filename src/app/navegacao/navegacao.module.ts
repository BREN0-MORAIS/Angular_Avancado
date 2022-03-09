import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  /*
      declaretions: definem quais vão ser os components desse módulo
      imports: caso tenha importando outros módulos
  */
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
  ],

  /*
   CommonModule = todo módulo precisa ter que é o modulo comun, diz que esse meta dado é um modulo
   RouterModule: como faz links de navegação do angular é necessário ter o router módule
  */
  imports: [CommonModule, RouterModule],
  providers: [],

  /*
   eports:diz que todos components declarados adicionados em exports, 
   pode ser utilizado em qualquer lugar da aplicação
  */
  exports: [MenuComponent, HomeComponent, FooterComponent, NotFoundComponent],
})

//depois de configurar tudo é necessário ir no modulo principal e adicionar em imports
export class NavegacaoModule {}
