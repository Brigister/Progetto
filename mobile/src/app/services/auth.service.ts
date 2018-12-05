import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as JWT from "jwt-decode"

@Injectable()
export class AuthService {

  private _registerUrl = "http://10.0.2.2:3000/user/signup";
  private _loginUrl = "http://10.0.2.2:3000/user/login";
  private _messageUrl = "http://10.0.2.2:3000/messages";
  private _checkUrl = "http://10.0.2.2:3000/user/";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  postMessage(message){
    return this.http.post<any>(this._messageUrl, message)
  }

  isValid(username : string, callback: Function): any{
    this.http.get<any>("http://10.0.2.2:3000/user/" + username + "/check").subscribe((data: any) => {
      callback(data);
    })
    
  }

  userWin(id: string): void{
    this.http.patch('http://10.0.2.2:3000/user/' + id + "/win", null).subscribe((data) =>
    console.log('SUCC'));
  }

  userLoss(id: string): void{
    this.http.patch('http://10.0.2.2:3000/user/' + id + "/loss", null).subscribe((data) =>
    console.log('SUCC'));
  }
  
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
    
  }



  logoutUser() {
    console.log(this.isAdmin());
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }



  getId() : string {
    const token = <any>JWT(this.getToken());
    return token.userId
  }

  getUsername() {
    const token = <any>JWT(this.getToken());
    return token.username
  }

  getEmail() {
    const token = <any>JWT(this.getToken());
    return token.email
  }

  isAdmin() : boolean {
    const token = <any>JWT(this.getToken());
    if (token.isAdmin == true){
    return true }
    else {return false}
    }
  }