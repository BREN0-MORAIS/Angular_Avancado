import { Produto } from "./../models/produto";
import { ProdutoService } from "./../services/produto.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-editar-produto",
  templateUrl: "./editar-produto.component.html",
  styles: [],
})
export class EditarProdutoComponent implements OnInit {
  Produto?: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*para pode pegar o id passado na rota ou qualquer parametro que esteja configura
    é só injetar a rora com ActiveRoute e buscar oela chave como parâmetro.
    */
    this.route.params.subscribe((params) => {
      // console.log(params["id"]);
      this.Produto = this.produtoService.obterPorId(params["id"]);
    });
  }

  salvar() {
    //navega de forma dinâmica
    this.router.navigate(["/produtos"]);

    //navega de forma que atualiza a pagina
    // this.router.navigateByUrl('/produtos');
  }
}
