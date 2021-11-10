import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { CnpjValidator, EnderecoDto, ViaCepService } from "../../../utils";
import { CadastroPj } from "../models";

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent {

  form: FormGroup
  enderecoDto: EnderecoDto = {}

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private viacepService: ViaCepService,

  ) {
    this.form = this.fb.group({
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      cnpj: ['', [Validators.required, CnpjValidator]],
      razao_social: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      web_site: ['', []],
      nome: ['', [Validators.required]],
      residencial: ['', [Validators.required]],
      celular: ['', []],
      outro: ['', []]
    })
  }

  cadastrarPj(){
    if(this.form.invalid){
      return
    }
    const cadastropf: CadastroPj = this.form.value
    console.log(cadastropf)
  }

  verificaCep(){
    if(this.form.value.cep.length === 8) {
      this.viacepService.getAdress(this.form.value.cep)
        .subscribe( response => {
          this.enderecoDto = response;
          if (this.enderecoDto.erro === true){
            this.openSnackBar("Erro ao carregar endereço", "danger")
            return;
          }
          this.preencherEndereco();
        })
    }
  }

  preencherEndereco(){
    this.form.controls['logradouro'].setValue(this.enderecoDto.logradouro)
    this.form.controls['bairro'].setValue(this.enderecoDto.bairro)
    this.form.controls['uf'].setValue(this.enderecoDto.uf)
    this.form.controls['cidade'].setValue(this.enderecoDto.localidade)
  }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 3000,
    });
  }

}
