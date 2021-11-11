import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EnderecoDto, ViaCepService, CpfValidator, passwordMatchValidator } from "../../../utils";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { CadastroUsuario } from "../models";
import { CadastroUsuarioService } from "../../services";

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {

  formUser: FormGroup
  formDetail: FormGroup
  formUsername: FormGroup
  enderecoDto: EnderecoDto = {}

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private viacepService: ViaCepService,
    private cadastroUsuarioService: CadastroUsuarioService
  ) {
    this.formUser = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, CpfValidator]],
    })
    this.formDetail = this.fb.group({
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      residencial: ['', [Validators.required]],
      celular: ['', []],
      outro: ['', []]
    })
    this.formUsername = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
      {validator: passwordMatchValidator})
  }

  verificaCep(){
    if(this.formDetail.value.cep.length === 8) {
      this.viacepService.getAdress(this.formDetail.value.cep)
        .subscribe( response => {
          this.enderecoDto = response;
          if (this.enderecoDto.erro === true){
            this.openSnackBar("Erro ao carregar endereço, preencha manualmente", "danger")
            return;
          }
          this.preencherEndereco();
        })
    }
  }

  preencherEndereco(){
    this.formDetail.controls['logradouro'].setValue(this.enderecoDto.logradouro)
    this.formDetail.controls['bairro'].setValue(this.enderecoDto.bairro)
    this.formDetail.controls['uf'].setValue(this.enderecoDto.uf)
    this.formDetail.controls['cidade'].setValue(this.enderecoDto.localidade)
  }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 3000,
    });
  }

  cadastrarUsuario(){
    const cadastroUsuario: CadastroUsuario = {...this.formUser.value, ...this.formUsername.value, ...this.formDetail.value}

    this.cadastroUsuarioService.cadastrarUsuario(cadastroUsuario)
      .subscribe( res => {
          this.openSnackBar("Cadastro realizado com sucesso", 'success')
        },
        error => {
          console.log(error)
        })

  }

}
