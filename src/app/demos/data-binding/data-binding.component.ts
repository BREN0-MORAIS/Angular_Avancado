import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {

  public contadorClique:number = 0;
  public imagemUrl:string = "https://angular.io//assets/images/logos/angular/angular.svg";
  public nome:string = "";
  public teste:string = "";

  adicionarClique(){
    this.contadorClique++;
  }
  KeyUp(event:any)
  {
    this.nome = event.target.value;
    this.teste = event;
  }
  zerarContador()
  {
    this.contadorClique = 0;
  }
 
}
