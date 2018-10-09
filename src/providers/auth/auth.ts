import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {BehaviorSubject} from  'rxjs';
import {Platform} from 'ionic-angular';
/*
  Generated class for the AuthProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const TOKEN_KEY = 'auth-token'
@Injectable()
export class AuthProvider {
	authenticationState = new BehaviorSubject(false);
  constructor(public http: HttpClient,private plt : Platform,private storage:Storage) {
  	this.plt.ready().then(()=>{
  		this.checkToken();
  	});
    console.log('Hello AuthProvider Provider');
  }
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }
 
  login() {
    return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
      this.authenticationState.next(true);
    });
  }
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
}