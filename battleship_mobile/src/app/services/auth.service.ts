import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; 
import * as JWT from "jwt-decode" 
 
@Injectable() 
export class AuthService {
 
 
  private _registerUrl = "http://10.0.2.2:3000/user/signup"; 
  private _loginUrl = "http://10.0.2.2:3000/user/login"; 
  private _userUrl = "http://10.0.2.2:3000/user/"; 
 
  constructor(private http: HttpClient, 
              private _router: Router) { } 
 
  registerUser(user) { 
    return this.http.post<any>(this._registerUrl, user) 
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
}