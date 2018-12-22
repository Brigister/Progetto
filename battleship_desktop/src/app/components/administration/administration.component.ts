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

  // Cancella Utente
  delete(id: string){
    this.data.userDelete(id);
    location.reload();
  }

  // Setta isAdmin a true
  upgrade(username : string) {
    this.data.upgradeUser(username);
    location.reload();
  }

  // Setta isAdmin a false
  downgrade(username : string) {
    this.data.downgradeUser(username);
    location.reload();
  }

  ngOnInit() {

    // Restituisce la lista Utenti
    this.data.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data.user;
  })

  } 
}
