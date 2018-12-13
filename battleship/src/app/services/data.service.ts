import { Injectable } from '@angular/core'; 
import { map } from 'rxjs/operators'; 
import { HttpClient } from '@angular/common/http'; 
//import { Observable } from 'rxjs/Observable'; 
import { Router } from '@angular/router' 
 
@Injectable() 
export class DataService { 
   
  private _statistics = 'http://localhost:3000/user/'; 
  private _messages = 'http://localhost:3000/messages/'; 
  private _base = 'http://localhost:3000/'; 
 
  constructor(public http:HttpClient, private _router: Router) {  
  } 
 
  public deleteMessage(id : string){ 
    this.http.delete(this._messages + id).subscribe((data) => 
    console.log('SUCC')); 
  } 
 
  public getUsers(){ 
    return this.http.get(this._statistics); 
          }; 
 
  public getStatistics(username : string) { 
    return this.http.get(this._statistics + username + "/statistics") 
  }; 
   
  public getAdmin(){ 
    return this.http.get(this._statistics ) 
  }        
 
  public userDelete(id: string): void{ 
    this.http.delete(this._statistics + id).subscribe((data) => 
    console.log('SUCC')); 
  } 
 
  public getMessages(username : string){ 
    return this.http.get(this._messages + username); 
  } 
 
  ///////////////////////////////////////////////////////////////////////////////// 
 
  public createConversation(conversationData){ 
    return this.http.post<any>(this._base, conversationData); 
 
  } 
 
   
}  
 
  