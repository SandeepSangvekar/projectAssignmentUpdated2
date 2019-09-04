import { Component, OnInit } from '@angular/core';
import { DataService } from './../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'My Angular Project';
  public response: any;
  public responseCopy: any;
  public sorted_way: string;
  p: number = 1;
  searchText;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getdata().subscribe((response: any) => {
      this.response = response;
      this.responseCopy = response; // to prevent data for future purpose
       this.response.sort((a, b) => a.first > b.first ? 1 : -1)
       this.sorted_way = "First name"
     //  console.log(this.response)
 })
  }
}
