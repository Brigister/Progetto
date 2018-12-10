import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import {IUser} from '../../iuser'

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
    })
    
  }
}