import { Usuario } from "./usuario.models";

export interface Imc{
    imcId? : number;
    altura : number;
    peso : number;
    criadoEm? : string;
    classificacao? : string;
    usuarioId : number;
    usuario? : Usuario;
}


/* Realizar aqui os ifs para a classificação */