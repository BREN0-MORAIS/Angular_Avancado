import { Produto } from "./../../models/produto";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "catalago-component",
  templateUrl: "./catalago.component.html",
  styles: [],
})
export class CatalogoComponent {
  //para poder passar dados do pai para o filho
  @Input()
  produto!: Produto;

  @Output()
  status: EventEmitter<any> = new EventEmitter();
  //enviar de filho para pai
  emitirEvento() {
    this.status.emit(this.produto);
  }
}
