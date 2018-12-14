import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router' 
 
@Injectable() 
export class DataService { 
   
  private _userUrl = 'http://localhost:3000/user/'; 
  private _messagesUrl = 'http://localhost:3000/messages/'; 
  private _baseUrl = 'http://localhost:3000/'; 
 
  constructor(public http:HttpClient, private _router: Router) {  
  } 
 
  public deleteMessage(id : string){ 
    this.http.delete(this._messagesUrl + id).subscribe() 
  } 
 
  public getUsers(){ 
    return this.http.get(this._userUrl); 
          }; 
 
  public getStatistics(username : string) { 
    return this.http.get(this._userUrl + username + "/statistics") 
  }; 
   
  public getAdmin(){ 
    return this.http.get(this._userUrl) 
  }        
 
  public upgradeUser(username : string){ 
    return this.http.patch(this._userUrl + username + '/upgrade', null).subscribe()
  } 
 
  public downgradeUser(username : string){ 
    return this.http.patch(this._userUrl + username + '/downgrade', null).subscribe()
  } 
 

  public userDelete(id: string): void{ 
    this.http.delete(this._userUrl + id).subscribe()
  } 
 
  public getMessages(username : string){ 
    return this.http.get(this._messagesUrl + username); 
  } 
 
  ///////////////////////////////////////////////////////////////////////////////// 
 
  public createConversation(conversationData){ 
    return this.http.post<any>(this._baseUrl, conversationData); 
 
  } 
 
   
}  
 
  