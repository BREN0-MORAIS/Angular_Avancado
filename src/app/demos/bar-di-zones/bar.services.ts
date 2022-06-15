import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BarServices {
  //private http: HttpClient
  constructor() {}

  obterBebidas(): string {
    return "Bebidas";
  }

  obterPorcoes(): string {
    return "Porções";
  }

  obterRefeicoes(): string {
    return "Refeções";
  }
}
