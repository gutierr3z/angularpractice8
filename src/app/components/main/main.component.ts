import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users:string[];

  constructor( public dataService:DataService ) { 
    this.users = this.dataService.getUsers();
  }

  ngOnInit() {
  }

}
