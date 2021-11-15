import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { LoginService } from "../../service";
import {Login} from "../../models";
import {LocalstorageService} from "../../../../utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: FormGroup
  showSpinner = false

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService,
    private localStorageService: LocalstorageService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  logar() {
    if (this.form.invalid) {
      this.snackBar.open(
        "Dados inválidos", "Erro", {duration: 5000})
      return
    }
    this.showSpinner = true
    const login: Login = this.form.value
    this.loginService.logar(login)
      .subscribe(response => {
        this.loginService.successfulLogin(response.body)
        this.showSpinner = false
        this.router.navigateByUrl('/dashboard')
      },
        error => {
        console.log(error)
          this.openSnackBar("Usuário ou senha inválidos", "danger")
          this.showSpinner = false
        })
  }

  openSnackBar(msg: string, classe: string) {
    this.snackBar.open(msg, 'OK',{
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: [classe],
      duration: 3000,
    });
  }

  ngOnInit(): void {
    if(this.localStorageService.getLocalUser()){
      this.showSpinner = true
      this.router.navigateByUrl('/dashboard')
    }
  }

}
