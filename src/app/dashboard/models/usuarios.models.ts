import {Telefone} from "./telefone.models";
import {Endereco} from "./endereco.models";
import {Empresa} from "./empresa.models";

export interface Usuario{
  id: string,
  username: string,
  first_name: string,
  last_name: string,
  cpf: string,
  email: string,
  telefone: Telefone,
  endereco: Endereco,
  empresa: Empresa[]
}
