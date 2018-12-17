import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; 
import * as JWT from "jwt-decode" 
 
@Injectable() 
export class AuthService {
 
 
  private _registerUrl = "http://localhost:3000/user/signup"; 
  private _loginUrl = "http://localhost:3000/user/login"; 
  private _messageUrl = "http://localhost:3000/messages"; 
  private _userUrl = "http://localhost:3000/user/"; 
 
  constructor(private http: HttpClient, 
              private _router: Router) { } 
 
  registerUser(user) { 
    return this.http.post<any>(this._registerUrl, user) 
  } 
 
  postMessage(message){ 
    return this.http.post<any>(this._messageUrl, message) 
  } 
 
  isValid(username : string, callback: Function): any{ 
    this.http.get<any>(this._userUrl + username + "/check").subscribe((data: any) => { 
      callback(data); 
    }) 
     
  } 
 
  userWin(username: string): void{ 
    this.http.patch(this._userUrl + username + "/win", null).subscribe((data) => 
    console.log('SUCC')); 
  } 
 
  userLoss(username: string): void{ 
    this.http.patch(this._userUrl + username + "/loss", null).subscribe((data) => 
    console.log('SUCC')); 
  } 
   
  loginUser(user) { 
    return this.http.post<any>(this._loginUrl, user) 
     
  } 
 
  logoutUser() { 
    sessionStorage.removeItem('token') 
    this._router.navigate(['/']) 
  } 
   
  getToken() { 
    return sessionStorage.getItem('token') 
  } 
 
  loggedIn() { 
    return !!sessionStorage.getItem('token')     
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
    return token.isAdmin;
  }

  getConversationId() {
    const token = <any>JWT(this.getToken()); 
    return token.conversationId;
  }
}