import { Usuario } from "./../../models/usuario";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styles: [],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  Usuario!: Usuario;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // let nome = new FormControl("");

    // this.cadastroForm = new FormGroup({
    //   nome: new FormControl(""),
    //   cpf: new FormControl(""),
    //   email: new FormControl(""),
    //   senha: new FormControl(""),
    //   senhaConfirmacao: new FormControl(""),
    // });

    this.cadastroForm = this.fb.group({
      nome: [""],
      cpf: [""],
      email: [""],
      senha: [""],
      senhaConfirmacao: [""],
    });
  }

  adicionarUsuario() {
    // let x = this.cadastroForm.value;
    this.Usuario = Object.assign({}, this.Usuario, this.cadastroForm.value);

    console.log(this.Usuario);
  }
}
