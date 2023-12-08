import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Imc } from "src/app/models/imc.models";

@Component({
  selector: "app-listar-imc",
  templateUrl: "./listar-imc.component.html",
  styleUrls: ["./listar-imc.component.css"],
})
export class ListarImcComponent {
  colunasTabela: string[] = [
    "id",
    "nome",
    "nascimento",
    "altura",
    "peso",
    "Imc",
    "classificacao",
    "criadoEm",
    "deletar",
    "alterar",
  ];

  imcs : Imc[] = [];

  constructor(
    private client: HttpClient, 
    private snackBar: MatSnackBar
  ) {}

  //Método que é executado ao abrir um componente
  ngOnInit(): void {
    this.client
      .get<Imc[]>("https://localhost:7091/api/imc/listar")
      .subscribe({
        //A requição funcionou
        next: (imcs) => {
          this.imcs = imcs;
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(imcId: number) {
    this.client
      .delete<Imc[]>(
        `https://localhost:7083/api/imc/deletar/${imcId}`
      )
      .subscribe({
        //Requisição com sucesso
        next: (imcs) => {
          this.imcs = imcs;
          this.snackBar.open("IMC deletado com sucesso!!", "JoaoFlores_DB", {
            duration: 1500,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}





