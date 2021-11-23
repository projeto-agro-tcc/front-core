import { Component, OnInit } from '@angular/core';
import {LocalstorageService, LocalUser} from "../../../utils";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  localUser: LocalUser

  constructor(
    private locasStorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.localUser = this.locasStorageService.getLocalUser()

  }

}
