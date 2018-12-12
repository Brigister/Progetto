import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Injectable()
export class DataService {
  
  _statistics = 'http://localhost:3000/user/';

  constructor(public http:HttpClient, private _router: Router) { 
  }

  public deleteMessage(id : string){
    this.http.delete('http://localhost:3000/messages/' + id).subscribe((data) =>
    console.log('SUCC'));
  }

  public getUsers(){
    return this.http.get('http://localhost:3000/user');
          };

  public getStatistics(username : string) {
    return this.http.get(this._statistics + username + "/statistics")
  };
  
  public getAdmin(){
    return this.http.get('http://localhost:3000/user' )
  }       

  public userDelete(id: string): void{
    this.http.delete('http://localhost:3000/user/' + id).subscribe((data) =>
    console.log('SUCC'));
  }

  public getMessages(username : string){
    return this.http.get('http://localhost:3000/messages/' + username);
  }

  /////////////////////////////////////////////////////////////////////////////////

  public createConversation(conversationData){
    return this.http.post<any>('http://localhost:3000/', conversationData);

  }

  
} 

  