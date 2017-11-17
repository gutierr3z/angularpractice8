import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  users:string[];

  constructor() { 
    this.users = [ 'one', 'two' ];
  }

  getUsers() {
    return this.users;
  }

}
