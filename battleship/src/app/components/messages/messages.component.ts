import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { IMessage} from '../../interfaces/imessage'


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public http: DataService, public auth: AuthService) { }

  messages: IMessage[];
  chats : string[];
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
            err =>{console.log(err)
            document.getElementById("error").innerText = "Messaggio vuoto, prego inserire un messaggio";
            }

          )
      }
      else {
        console.log("Destinatario inesistente");
       
        document.getElementById("error").innerText = "Destinatario inesistente";

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