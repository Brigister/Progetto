import { Component, OnInit } from '@angular/core';
import { IUser} from '../../Interfaces/iuser'
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor( public http:DataService) { }
    users: IUser[];

  delete(id: string){
    this.http.userDelete(id);
    location.reload();
  }

  upgrade(username : string) {
    this.http.upgradeUser(username);
    location.reload();
  }

  downgrade(username : string) {
    this.http.downgradeUser(username);
    location.reload();
  }

  ngOnInit() {
    this.http.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data.user;
  })

  } 
}
