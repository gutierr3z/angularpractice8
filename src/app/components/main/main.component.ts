import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data:any[] = [];
  users:any[];

  constructor( public dataService:DataService ) { 
    // this.users = this.dataService.getUsers();
    this.dataService.getData().subscribe( data => {
      // console.log( data );
      this.data.push( data );
    });

    this.dataService.getUsers().subscribe( users => {
      console.log( users );
    });
  }

  

  ngOnInit() {
  }

}

















