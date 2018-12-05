import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Injectable()
export class DataService {

  constructor(public http:HttpClient, private _router: Router) { 
    //console.log('ciaociao');
  }

  public deleteMessage(id : string){
    this.http.delete('http://localhost:3000/messages/' + id).subscribe((data) =>
    console.log('SUCC'));
  }

  public getUsers(){
    return this.http.get('http://localhost:3000/user');
          };
  
  public getAdmin(){
    return this.http.get('http://localhost:3000/user' )
  }       

  public userDelete(id: string): void{
    this.http.delete('http://localhost:3000/user/' + id).subscribe((data) =>
    console.log('SUCC'));
  }

  public userWin(id: string): void{
    this.http.patch('http://localhost:3000/user/' + id + "/win", 0).subscribe((data) =>
    console.log('SUCC'));
  }

  public userLoss(id: string): void{
    this.http.patch('http://localhost:3000/user/' + id + "/loss", 0).subscribe((data) =>
    console.log('SUCC'));
  }

  public getMessages(username : string){
    return this.http.get('http://localhost:3000/messages/' + username);
  }

  
} 

  