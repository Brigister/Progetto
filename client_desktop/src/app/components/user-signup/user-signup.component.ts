import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  public registerUserData = {
    email: String,
    password: String,
    username: String
  }
  constructor(public _auth: AuthService,
              public _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        //localStorage.setItem('token', res.token)
        this._router.navigate(['/login'])
      },
      err => console.log(err)
    )      
  }


}