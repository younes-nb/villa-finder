import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    confirmPassword: new FormControl('', Validators.required),
    acceptTerms: new FormControl(false, Validators.requiredTrue)
  })
  submitted = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? {confirmPassword: true} : {confirmPassword: false};
  };

  onSubmit(): void {
    this.authService.register(
      this.registerForm.controls['firstName'].value,
      this.registerForm.controls['lastName'].value,
      this.registerForm.controls['username'].value,
      this.registerForm.controls['email'].value,
      this.registerForm.controls['phone'].value,
      this.registerForm.controls['password'].value,
    ).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: () => {
        alert('ثبت نام ناموفق بود.');
      }
    });
  }
}
