export class CadastroUsuario{
  constructor(
    public first_name: string,
    public last_name: string,
    public email: string,
    public cpf: string,
    public password: string,
    public username: string,
    public residencial: string,
    public celular: string,
    public outro: string,
    public logradouro: string,
    public numero: string,
    public complemento: string,
    public bairro: string,
    public cidade: string,
    public cep: string,
    public uf: string,
  ) {}
}
