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

  utente: string = this.auth.getUsername();
  messageData = <any>{};
  inputVar : string = '';
  todayDate = new Date();
  dateToday = (this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + ' ' 
              + this.todayDate.getDate() + '-' + ((this.todayDate.getMonth() + 1)) + '-' + this.todayDate.getFullYear());
  

  ngOnInit() {
    console.log(this.utente);

    this.http.getMessages(this.utente).subscribe((data: any) => {
      console.log(data);
      this.messages = data.message;
      console.log(this.messages);
    })
  }

  delete(id: string){
    console.log("succ");
    this.http.deleteMessage(id);
    location.reload();
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
              location.reload();
            },
            err => console.log(err)
          )
      }
      else {
        console.log("Destinatario inesistente");
       // var p = document.createElement("div");
        document.getElementById("error").innerHTML = "𝓓𝓮𝓼𝓽𝓲𝓷𝓪𝓽𝓪𝓻𝓲𝓸 𝓲𝓷𝓮𝓼𝓲𝓼𝓽𝓮𝓷𝓽𝓮";
        //console.log(p);

       // var addp = document.getElementById("error");
        //document.body.insertBefore(p, addp.childNodes[0]);
        

      }
    });
  }

}

interface IMessage {
  id: string,
  content: string,
  author: string,
  recipient: string,
  date: string
}
