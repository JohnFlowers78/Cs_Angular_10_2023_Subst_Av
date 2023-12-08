  import { HttpClient } from "@angular/common/http";
  import { Component } from "@angular/core";
  import { MatSnackBar } from "@angular/material/snack-bar";
  import { Router } from "@angular/router";
  import { Usuario } from "src/app/models/usuario.models";
  import { Imc } from "src/app/models/imc.models";

  @Component({
    selector: "app-cadastrar-imc",
    templateUrl: "./cadastrar-imc.component.html",
    styleUrls: ["./cadastrar-imc.component.css"],
  })
  
  export class CadastrarImcComponent{
    altura : string = "";
    peso : string = "";
    usuarioId : number = 0;
    usuarios : Usuario[] = [];
    
    constructor (
      private client : HttpClient,
      private snackbar : MatSnackBar,
      private router : Router
    ) {}

    ngOnInit() : void {
      this.client
        .get<Usuario[]>("https://localhost:7091/api/imc/listar")
          .subscribe ({
            next: (usuarios) => {
              this.usuarios = usuarios;
            },
            error: (erro) => {
              console.log(erro);
            }
          });
    }

    cadastrar() : void {
      let imc : Imc = {
        altura : Number.parseFloat(this.altura),
        peso : Number.parseFloat(this.peso),
        usuarioId : this.usuarioId
      }

      this.client
        .post<Imc>("https://localhost:7091/api/imc/cadastrar", imc)
          .subscribe ({
            next: (imc) => {
              this.snackbar.open("O Imc foi cadastrado com sucesso!", "JoaoFlores_DB", {
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
