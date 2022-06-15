import { CadastroComponent } from "./../app/demos/reactiveForms/cadastro/cadastro.component";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {
  canDeactivate(component: CadastroComponent) {
    if (component.mundancasNaoSalvas) {
      return window.confirm("tem certeza");
    }
    return true;
  }
}
