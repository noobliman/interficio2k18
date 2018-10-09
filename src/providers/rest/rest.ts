import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError,tap,map} from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import {User} from '../user.model';
/*
  Generated class for the RestProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000";
@Injectable()
export class RestProvider {
	
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
 
  getUsers() {
  return new Promise(resolve => {
    this.http.get(apiUrl+'/users').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
  
  addUser(data) {
  return new Promise((resolve, reject) => {
    this.http.post(apiUrl+'/users', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
  

}