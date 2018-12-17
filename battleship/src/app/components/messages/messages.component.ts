import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public http: DataService, public auth: AuthService) { }

  messages: IMessage[];
  chats : string[];
  gianni: string ="trollololol";
  utente: string = this.auth.getUsername();
  active : string;
  messageData = <any>{};
  todayDate = new Date();
  dateToday = (this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + ' ' 
              + this.todayDate.getDate() + '-' + ((this.todayDate.getMonth() + 1)) + '-' + this.todayDate.getFullYear());
  
  ngOnInit() {
    console.log(this.utente);

    this.http.getChats(this.utente).subscribe((data: any) => {
      this.chats = data.message;
      console.log(this.chats);
    })
  }

  postMessage() {
    this.auth.isValid(this.messageData.recipient, (isValid: boolean) => {
      if (isValid) {
        this.messageData.date = this.dateToday;
        this.messageData.author = this.auth.getUsername();
        this.auth.postMessage(this.messageData)
          .subscribe(
            res => {
              console.log(this.messageData)
            },
            err => console.log(err)
          )
      }
      else {
        console.log("Destinatario inesistente");
       
        document.getElementById("error").innerHTML = "𝓓𝓮𝓼𝓽𝓲𝓷𝓪𝓽𝓪𝓻𝓲𝓸 𝓲𝓷𝓮𝓼𝓲𝓼𝓽𝓮𝓷𝓽𝓮";

      }
    });
  }

  showMessages(username : string){
    this.active = username;
    this.http.getChatsMessages(this.utente , username).subscribe((data : any) => {
      this.messages = data.message
      console.log(this.messages);
    }) 
  }

}

interface IMessage {
  id: string,
  content: string,
  author: string,
  recipient: string,
  date: string
}
