import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario.models";
import { Imc } from "src/app/models/imc.models";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})

export class CadastrarComponent{
  nome : string = "";
  nascimento : string = "";

  constructor (
    private client : HttpClient,
    private snackbar : MatSnackBar,
    private router : Router
  ) {}

  cadastrar() : void {
    let usuario : Usuario = {
      nome : this.nome,
      nascimento : this.nascimento
    }

    this.client
      .post<Usuario>("https://localhost:7091/api/usuario/cadastrar", usuario)
        .subscribe ({
          next: (usuario) => {
            this.snackbar.open("O usuário foi cadastrado com sucesso!", "JoaoFlores_DB", {
              duration : 1500,
              horizontalPosition : "right",
              verticalPosition : "top"
            });
            this.router.navigate(["pages/imc/listar-imc"]);
          },
          error: (erro) => {
            console.log(erro);
          }
        });
  }
}

