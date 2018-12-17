import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import {IUser} from '../../interfaces/iuser'

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  users: IUser[];

  constructor(public http: DataService) {
  }

  
  ngOnInit(): void {
    
    this.http.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data.user;    
      console.table(this.users);
     
    })

  
  }
}



/* for (let i = 0; i < this.users.length; i++) {
        const sortWin = this.users[i];
        if ((this.users[i].win - this.users[i+1].win) > 0) {
          sortWin == this.users[i]
        }
        else {
          sortWin == this.users[i+1]
        }
        i++; 
      }  
      console.table(this.users); */