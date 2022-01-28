import { Produto } from "./../../models/produto";
import { Component, Input } from "@angular/core";

@Component({
  selector: "catalago-component",
  templateUrl: "./catalago.component.html",
  styles: [],
})
export class CatalogoComponent {
  @Input()
  produto!: Produto;
}
