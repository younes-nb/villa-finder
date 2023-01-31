import {Component, OnInit} from '@angular/core';
import {User} from "../../../types";
import {StorageService} from "../../core/auth/storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: User = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    villas: []
  };

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

}
