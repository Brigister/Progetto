import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http'; 
 
@Injectable() 
export class DataService { 
   
  private _userUrl = 'http://10.0.2.2:3000/user/'; 
  private _messagesUrl = 'http://10.0.2.2:3000/messages/'; 

  constructor(public http:HttpClient) {  
  } 
  
  //Administration Component
  public getUsers(){ 
    return this.http.get(this._userUrl); 
  }; 

  //Leaderboard Component
  public getLeaderboard(){ 
    return this.http.get(this._userUrl + 'leaderboard'); 
  }; 
 
  //Search Component
  public getStatistics(username : string) { 
    return this.http.get(this._userUrl + username + "/statistics") 
  }; 
 
  //Game Component
  patchVictory(username: string): void{ 
    this.http.patch(this._userUrl + username + "/victory", null).subscribe((data) => 
    console.log('SUCC')); 
  } 
 
  patchDefeat(username: string): void{ 
    this.http.patch(this._userUrl + username + "/defeat", null).subscribe((data) => 
    console.log('SUCC')); 
  } 

  //Administration Component
  public upgradeUser(username : string){ 
    return this.http.patch(this._userUrl + username + '/upgrade', null).subscribe()
  } 
 
  public downgradeUser(username : string){ 
    return this.http.patch(this._userUrl + username + '/downgrade', null).subscribe()
  } 
 
  public userDelete(id: string): void{ 
    this.http.delete(this._userUrl + id).subscribe()
  } 
  
  //Chat Component
  public getChats(username : string) {
    return this.http.get(this._messagesUrl + username + '/conversations');
  }  

  public getChatsMessages(user1 : string, user2 : string) {
    return this.http.get(this._messagesUrl + user1 + '/' + user2 + '/payload');
  }

  validRecipient(username : string, callback: Function): any{ 
    this.http.get<any>(this._userUrl + username + "/check").subscribe((data: any) => { 
      callback(data); 
    }) 
  } 
  
  sendMessage(message){ 
    return this.http.post<any>(this._messagesUrl, message) 
  } 
 

  public deleteMessage(id : string){ 
    this.http.delete(this._messagesUrl + id).subscribe() 
  } 
}  
 
  