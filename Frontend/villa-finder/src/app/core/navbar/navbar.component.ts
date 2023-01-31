import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from "../auth/storage.service";
import {AuthService} from "../auth/auth.service";
import {User} from "../../../types";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() theme: string = '';
  currentUser: User = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    villas: []
  };
  isLoggedIn: boolean = false;

  constructor(private storageService: StorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.storageService.clean();
        window.location.reload();
      },
      error: () => {
        alert('خروج از حساب ناموفق بود.');
        window.location.reload();
      }
    });
  }
}
