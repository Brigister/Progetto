import { Component, OnInit } from '@angular/core';
import { IUser} from '../../Interfaces/iuser'
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor( public data:DataService) { }
    users: IUser[];

  delete(id: string){
    this.data.userDelete(id);
    location.reload();
  }

  upgrade(username : string) {
    this.data.upgradeUser(username);
    location.reload();
  }

  downgrade(username : string) {
    this.data.downgradeUser(username);
    location.reload();
  }

  ngOnInit() {
    this.data.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data.user;
  })

  } 
}
