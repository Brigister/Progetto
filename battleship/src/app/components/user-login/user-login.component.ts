import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(){
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        sessionStorage.setItem('token', res.token);
        this._router.navigate(["/leaderboard"])
      },
      err => {
        console.log(err)
        document.getElementById("fail").innerText="I dati inseriti non sono corretti"
      }
    )
  }

}
