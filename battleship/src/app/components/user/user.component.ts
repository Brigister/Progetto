import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent /*implements OnInit*/ {
  users: IUser[];
  posts: Post[];

  constructor(public http: DataService) {
  }


  ngOnInit(): void {

    this.http.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data.user;
      //this.users.sort(data.user.win);

      
    
    })
    
  }
}

export interface IUser {
  id: string,
  username: string,
  email: string,
  win: number,
  losses: number,
  isAdmin: boolean,
  password: string

}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}