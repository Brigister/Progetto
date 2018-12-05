import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public loginUserData = {
    email: String,
    password: String,
  }
  constructor(public _auth: AuthService, public _router: Router) {}

  ngOnInit(){
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(["/ranking"])
      },
      err => console.log(err)
    )
  }
}
