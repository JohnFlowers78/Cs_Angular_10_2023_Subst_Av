import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarImcComponent } from './pages/imc/listar-imc/listar-imc.component';
import { AlterarImcComponent } from './pages/imc/alterar-imc/alterar-imc.component';
import { CadastrarImcComponent } from './pages/imc/cadastrar-imc/cadastrar-imc.component';


const routes: Routes = [
  {
    path: "",
    component: ListarImcComponent
  },
  {
    path: "cadastrar/imc/listar",
    component: CadastrarImcComponent
  },
  {
    path: "pages/imc/listar",
    component: AlterarImcComponent
  },
  {
    path: "pages/imc/listar",
    component: ListarImcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
