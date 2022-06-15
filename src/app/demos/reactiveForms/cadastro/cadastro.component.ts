import { Usuario } from "./../../models/usuario";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styles: [],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup; //é necessario para poder armazenar e referenciar qual formulário deve pegar os dados
  Usuario!: Usuario;
  formResult: string = "";
  mundancasNaoSalvas?: boolean;

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
      nome: ["", Validators.required],
      cpf: [""],
      email: ["", [Validators.required, Validators.email]],
      senha: [""],
      senhaConfirmacao: [""],
    }); //armazenar dados do formulario de forma a agrupar é necessário injetar o formBuilder
    //armaxena os dados do from builder
  }

  adicionarUsuario() {
    // let x = this.cadastroForm.value;
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.Usuario = Object.assign({}, this.Usuario, this.cadastroForm.value); //converte os  valores do frormulario em objetos
      this.formResult = JSON.stringify(this.cadastroForm.value);

      this.mundancasNaoSalvas = false;
    } else {
      this.mundancasNaoSalvas = true;

      console.log("asd");
    }
  }
}
