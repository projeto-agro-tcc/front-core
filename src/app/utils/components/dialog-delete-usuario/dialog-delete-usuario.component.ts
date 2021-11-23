import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Usuario} from "../../../dashboard";

@Component({
  selector: 'app-dialog-delete-usuario',
  templateUrl: './dialog-delete-usuario.component.html',
  styleUrls: ['./dialog-delete-usuario.component.css']
})
export class DialogDeleteUsuarioComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Usuario) { }

  ngOnInit(): void {
  }

}
