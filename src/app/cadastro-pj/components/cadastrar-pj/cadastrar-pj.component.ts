import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.form = this.fb.group({
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      razao_social: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      web_site: ['', []],
      nome: ['', [Validators.required]],
      residencial: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      outro: ['', [Validators.required]]
    })
  }

  cadastrarPj(){
    if(this.form.invalid){
      return
    }
    console.log(this.form.value)
  }





}
