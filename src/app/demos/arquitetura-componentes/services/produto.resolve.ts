import { ProdutoService } from "./produto.service";
import { Produto } from "./../models/produto";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class ProdutosResolve implements Resolve<Produto[]> {
  constructor(private ProdutoService: ProdutoService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.ProdutoService.obterTodos(route.params.estado);
  }
}
