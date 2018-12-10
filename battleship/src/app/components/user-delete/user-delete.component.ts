import { Component, OnInit } from '@angular/core';
import { IUser} from '../../iuser'
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor( public http:DataService) { }
    users: IUser[];

  delete(id: string){
    this.http.userDelete(id);
    location.reload();
  }

  ngOnInit() {
    this.http.getUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data.user;
  })

}
}
