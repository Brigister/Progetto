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
    
    // Lista utenti in base al numero di vittorie
    this.http.getLeaderboard().subscribe((data: any) => {
      console.log(data);
      this.users = data.user;    
      console.table(this.users);
     
    })
  }
}
