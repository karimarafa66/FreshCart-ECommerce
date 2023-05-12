import { Injectable, OnInit } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginForm } from '../interfaces/login-form';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  baseUrl: string = 'https://route-ecommerce-app.vercel.app/api/v1/auth/';

  userIsLogedIn = new BehaviorSubject(false);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') != null) {
      this.userIsLogedIn.next(true);
    }
    console.log(this.userIsLogedIn.value);
    try {
      var decoded = jwt_decode(localStorage.getItem('token') || '');
      console.log(decoded);
    } catch (error:any) {
      console.log(error);
      if (error.message) {
        this.logout();
      }
    }
  }
  ngOnInit(): void {}

  handleRegister(registerForm: RegisterForm): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signup', registerForm);
  }
  handleLogin(loginForm: LoginForm): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signin', loginForm);
  }

  logout() {
    localStorage.removeItem('token');
    this.userIsLogedIn.next(false);
    this._Router.navigate(['/login']);
  }
}
