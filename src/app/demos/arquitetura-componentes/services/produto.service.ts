import { Injectable } from "@angular/core";
import { Produto } from "../models/produto";

/*para habilitar a injeção de depenências, é necessario que
em providers do modulo, adicioane a classe de serviço
*/
@Injectable()
export class ProdutoService {
  produtos: Produto[] = [];

  constructor() {
    this.produtos = [
      {
        id: 1,
        nome: "teste",
        ativo: true,
        valor: 100,
        imagem: "01.png",
      },
      {
        id: 2,
        nome: "teste 2",
        ativo: true,
        valor: 200,
        imagem: "01.png",
      },
      {
        id: 3,
        nome: "teste 3",
        ativo: true,
        valor: 300,
        imagem: "01.png",
      },
    ];
  }

  // obterTodos(): Produto[] {
  //   return this.produtos;
  // }

  obterTodos(estado: string): Produto[] {
    if (estado === "ativos") {
      return this.produtos.filter((produto) => produto.ativo == true);
    } else if (estado === "inativos") {
      return this.produtos.filter((produto) => produto.ativo == false);
    }
    return this.produtos;
  }

  obterPorId(id: number) {
    var obj = this.produtos.find((produto) => produto.id == id);
    return obj;
  }
}
