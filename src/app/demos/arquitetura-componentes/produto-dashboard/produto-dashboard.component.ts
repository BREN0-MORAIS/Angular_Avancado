import { fromEvent, Observable } from "rxjs";
import { Produto } from "./../models/produto";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-produto-dashboard",
  templateUrl: "./produto-dashboard.component.html",
  styles: [],
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild("teste", { static: false }) mensagemTela!: ElementRef;

  constructor() {}
  ngAfterViewInit(): void {
    let clickTexto: Observable<any> = fromEvent(
      this.mensagemTela.nativeElement,
      "click"
    );

    clickTexto.subscribe(() => {
      alert("clicou no texto");

      return;
    });
  }

  //método vindo do componete filho
  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
  ngOnInit(): void {}

  listProdutos: Produto[] = [
    { id: 1, ativo: true, imagem: "01.png", nome: "Óleo1", valor: 10.0 },
    { id: 2, ativo: true, imagem: "02.png", nome: "Óleo2", valor: 11.0 },
    { id: 3, ativo: true, imagem: "03.png", nome: "Óleo3", valor: 12.0 },
    {
      id: 3,
      ativo: false,
      imagem: "03.png",
      nome: "Óleo3 inativo",
      valor: 12.0,
    },
    { id: 1, ativo: true, imagem: "01.png", nome: "Óleo1", valor: 10.0 },
    { id: 2, ativo: true, imagem: "02.png", nome: "Óleo2", valor: 11.0 },
    { id: 3, ativo: true, imagem: "03.png", nome: "Óleo3", valor: 12.0 },
    {
      id: 3,
      ativo: false,
      imagem: "03.png",
      nome: "Óleo3 inativo",
      valor: 12.0,
    },
    { id: 1, ativo: true, imagem: "01.png", nome: "Óleo1", valor: 10.0 },
    { id: 2, ativo: true, imagem: "02.png", nome: "Óleo2", valor: 11.0 },
    { id: 3, ativo: true, imagem: "03.png", nome: "Óleo3", valor: 12.0 },
    {
      id: 3,
      ativo: false,
      imagem: "03.png",
      nome: "Óleo3 inativo",
      valor: 12.0,
    },
    { id: 1, ativo: true, imagem: "01.png", nome: "Óleo1", valor: 10.0 },
    { id: 2, ativo: true, imagem: "02.png", nome: "Óleo2", valor: 11.0 },
    { id: 3, ativo: true, imagem: "03.png", nome: "Óleo3", valor: 12.0 },
    {
      id: 3,
      ativo: false,
      imagem: "03.png",
      nome: "Óleo3 inativo",
      valor: 12.0,
    },
    { id: 1, ativo: true, imagem: "01.png", nome: "Óleo1", valor: 10.0 },
    { id: 2, ativo: true, imagem: "02.png", nome: "Óleo2", valor: 11.0 },
    { id: 3, ativo: true, imagem: "03.png", nome: "Óleo3", valor: 12.0 },
    {
      id: 3,
      ativo: false,
      imagem: "03.png",
      nome: "Óleo3 inativo",
      valor: 12.0,
    },
    { id: 1, ativo: true, imagem: "01.png", nome: "Óleo1", valor: 10.0 },
    { id: 2, ativo: true, imagem: "02.png", nome: "Óleo2", valor: 11.0 },
    { id: 3, ativo: true, imagem: "03.png", nome: "Óleo3", valor: 12.0 },
    {
      id: 3,
      ativo: false,
      imagem: "03.png",
      nome: "Óleo3 inativo",
      valor: 12.0,
    },
  ];
}
