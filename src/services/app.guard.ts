import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  //simula um usuário logado
  user = { admin: true, logged: false };

  //retorna um bolean
  canLoad(): boolean {
    return this.user.admin;
  }

  //verifica se usuário esta logado
  canActivate(): boolean {
    return this.user.logged;
  }
}
