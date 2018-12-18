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

  constructor(public http: DataService, public auth: AuthService) { }

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

    this.http.getChats(this.username).subscribe((data: any) => {
      this.chats = data.message;
      console.log(this.chats);
    })
  }

  postMessage() {
    this.auth.isValid(this.messageData.recipient, (isValid: boolean) => {
      if (isValid) {
        this.messageData.date = this.now;
        this.messageData.author = this.username;
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
    this.http.getChatsMessages(this.username , username).subscribe((data : any) => {
      this.messages = data.message
      console.log(this.messages);
    }) 
  }
}