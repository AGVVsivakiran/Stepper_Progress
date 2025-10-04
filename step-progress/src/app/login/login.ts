import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,      
  imports: [FormsModule, RouterModule], 
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  cred={
    email: '',
    password: ''
  }
  private readonly email = "kiran@gmail.com";
  private readonly password = "123456";

  constructor(private router: Router) {}

  submit (): void{
    if(this.cred.email === this.email && this.cred.password === this.password){
      alert("Login Successful");
      this.router.navigate(['/step-progress']);
    }else{
      alert("Login Failed");
    }
  }
}
