import {Telefone} from "./telefone.models";
import {Endereco} from "./endereco.models";

export interface Empresa{
    id?: string,
    nome?: string,
    email?: string,
    cnpj?: string,
    razao_social?: string,
    web_site?: string,
    telefone?: Telefone,
    endereco?: Endereco
}
