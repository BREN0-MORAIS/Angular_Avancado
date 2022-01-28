import { Produto } from "./../models/produto";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto-dashboard",
  templateUrl: "./produto-dashboard.component.html",
  styles: [],
})
export class ProdutoDashboardComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
