import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.ts.html",
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: "/home",
      name: "Home",
      exact: true,
      admin: true,
    },
    {
      link: "/cadastro",
      name: "Cadastro",
      exact: true,
      admin: true,
    },
    {
      link: "/sobre",
      name: "Sobre",
      exact: true,
      admin: true,
    },
    {
      link: "/produtos",
      name: "Produtos",
      exact: true,
      admin: true,
    },
  ];
}

interface Nav {
  link: string;
  name: string;
  exact: boolean;
  admin: boolean;
}
