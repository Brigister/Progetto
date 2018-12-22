import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { IMessage} from '../../interfaces/imessage'


@Component({
  selector: 'app-messages',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public data: DataService, public auth: AuthService) { }

  messages: IMessage[];
  chats : string[];
  username: string = this.auth.getUsername();
  active : string;
  messageData = <any>{};
  todayDate = new Date();
  now = (this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + ' ' 
              + this.todayDate.getDate() + '-' + ((this.todayDate.getMonth() + 1)) + '-' + this.todayDate.getFullYear());
  
  ngOnInit() {
    console.log(this.username);
    this.data.getChats(this.username).subscribe((data: any) => {
      this.chats = data.message;
      console.log(this.chats);
    })
  }

  // Controlla se il destinatario è valido > mette dentro messageData le info che vanno mandate al server per creare un messaggio
  postMessage() {
    this.data.validRecipient(this.messageData.recipient, (isValid: boolean) => {
      if (isValid) {
        this.messageData.date = this.now;
        this.messageData.sender = this.username;
        this.data.sendMessage(this.messageData)
          .subscribe(
            res => {
              console.log(this.messageData)
              this.messageData.payload = ""
            },
            err =>{console.log(err)
            document.getElementById("error").innerText = "Messaggio vuoto, prego inserire un messaggio";
            }
          )
      }
      else {
        document.getElementById("error").innerText = "Destinatario inesistente";
      }
    });
  }

  // Restituisce i messaggi tra i 2 utenti
  showMessages(username : string){
    this.active = username;
    this.data.getChatsMessages(this.username , username).subscribe((data : any) => {
      this.messages = data.message
      console.log(this.messages);
    });
  }
}