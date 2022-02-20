import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CnpjValidator, EnderecoDto, ViaCepService} from "../../../utils";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {DashboardService} from "../../services";
import {CadastroPj} from "../../models";

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent {

  form: FormGroup
  enderecoDto: EnderecoDto = {}

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private viacepService: ViaCepService,
    private dashboardService: DashboardService
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
    })}

  cadastrarEmpresa(){
    if(this.form.invalid){
      return
    }
    const cadastropf: CadastroPj = this.form.value

    this.dashboardService.cadastrarEmpresa(cadastropf)
        .subscribe( res => {
            this.openSnackBar("Cadastro realizado com sucesso", 'success')
            this.router.navigateByUrl('/dashboard/empresas')
          },
          error => {
            this.openSnackBar("Problemas ao realizar cadatro", 'danger')
            this.router.navigateByUrl('/dashboard/empresas')
          })
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
