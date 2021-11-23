import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {Empresa} from "../../../dashboard";

@Component({
  selector: 'app-dialog-delete-empresa',
  templateUrl: './dialog-delete-empresa.component.html',
  styleUrls: ['./dialog-delete-empresa.component.css']
})
export class DialogDeleteEmpresaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Empresa) { }

  ngOnInit(): void {
  }

}
