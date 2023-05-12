import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {
    if (_AuthService.userIsLogedIn.value) {
      _Router.navigate(['/home]']);
    }
  }

  rePasswordValue!: string;
  rePasswordIsValid: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      ),
    ]),
  });

  login() {
    if (this.loginForm.status == 'VALID') {
      console.log(this.loginForm.value);
      this._AuthService.handleLogin(this.loginForm.value).subscribe({
        next: (respone) => {
          if (respone.message == 'success') {
            this._AuthService.userIsLogedIn.next(true);
            localStorage.setItem('token', respone.token);
            this._Router.navigate(['/home']);
          }
        },
      });
    }
  }

  matchPassword() {
    if (this.loginForm.value.password == this.loginForm.value.rePassword) {
      this.rePasswordIsValid = true;
    } else {
      this.rePasswordIsValid = false;
    }
  }
}
