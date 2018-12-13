import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private dataService : DataService) { }
   statistics;
   searched = "";

  ngOnInit() {}

  userStatistics(searched) {
    return this.dataService.getStatistics(searched).subscribe((data:any) => {
    console.log(data);
    this.statistics = data.user;
    document.getElementById("fail").style.display ="none";
     
    
    

    },
    err => {
    console.log(err)
    document.getElementById("fail").style.display ="initial";
    document.getElementById("fail").innerText="I dati inseriti non sono corretti"
        
    }
    );
    
   
  }
}
