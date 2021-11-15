export class Endereco{
  constructor(
    public logradouro: string,
    public numero: string,
    public complemento: string,
    public bairro: string,
    public cidade: string,
    public cep: string,
    public uf: string,
  ) {}
}
