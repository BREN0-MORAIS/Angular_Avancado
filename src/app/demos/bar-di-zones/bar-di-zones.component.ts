import { BarServices } from "./bar.services";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bar-di-zones",
  templateUrl: "./bar-di-zones.component.html",
  providers: [{ provide: BarServices, useClass: BarServices }], //pode está registrando no pr[oprio componente]
})
export class BarDiZonesComponent implements OnInit {
  bebidas1?: string = "asd";
  constructor(private barServices: BarServices) {}

  ngOnInit(): void {
    this.bebidas1 = this.barServices.obterBebidas();
  }
}
