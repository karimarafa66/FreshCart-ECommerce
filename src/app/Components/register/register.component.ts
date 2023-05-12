import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService,private _Router:Router) {

  }

  rePasswordValue!: string;
  rePasswordIsValid:boolean = false;

  registerForm:FormGroup = new FormGroup({

    "name": new FormControl(null,[Validators.required,Validators.maxLength(20)]),
    "email": new FormControl(null,[Validators.required,Validators.email]),
    "password": new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    "rePassword": new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    "phone": new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
   })

   register(){
    if(this.registerForm.status == "VALID"){

      console.log(this.registerForm.value);
      this._AuthService.handleRegister(this.registerForm.value).subscribe({
        next: (response) => {
          if(response.message=='success'){
            this._Router.navigate(['/login'])
          }
        }
      })
    }

   }

   matchPassword(){
    if(this.registerForm.value.password == this.registerForm.value.rePassword ){
      this.rePasswordIsValid = true;
    }else{
      this.rePasswordIsValid = false;
    }
   }

}
