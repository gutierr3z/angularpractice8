import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  data:Observable<Array<any>>;
  users:string[];

  constructor( public http:Http ) { 
    this.users = [ 'one', 'two' ];
  }

  getUsers() {
    return this.http.get( 'http://jsonplaceholder.typicode.com/users' ).map( res => res.json() );
  }

  getData() {
    this.data = new Observable( observer => {
      setTimeout( () => {
        observer.next(1);
      }, 1000 );

      setTimeout( () => {
        observer.next(2);
      }, 2000 );

      setTimeout( () => {
        observer.next(3);
      }, 3000 );

      setTimeout( () => {
        observer.next( 'hello' );
      }, 4000 );

      setTimeout( () => {
        observer.complete();
      }, 5000 );
    });

    return this.data;
  }

  // getUsers() {
  //   return this.users;
  // }

}












