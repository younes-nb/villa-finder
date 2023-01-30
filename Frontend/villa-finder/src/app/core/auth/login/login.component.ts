import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {StorageService} from "../storage.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.authService.login(
      this.loginForm.controls['username'].value,
      this.loginForm.controls['password'].value,
    ).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.reloadPage()
      },
      error: () => {
        alert('ورود به حساب ناموفق بود.');
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
