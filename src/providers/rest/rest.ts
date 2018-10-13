import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError,tap,map} from 'rxjs/operators';
import {Storage} from '@ionic/storage';
import {User} from '../user.model';
/*
  Generated class for the RestProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
 class level {
      level_no: number ; 
      title : string ;
      ques: string;
      map_bool: boolean ;
    }


const apiUrl = "http://142.93.220.123:8888/";
@Injectable()
export class RestProvider {
	level : level ;
  token : string ;
  username : string;
  userdetail : User ;
  constructor(public http: HttpClient, private storage : Storage) {
    console.log('Hello RestProvider Provider');
  }

    addUser (userData : User){
      console.log('ayush');
    return this.http.post(apiUrl+'api/auth/register',userData, httpOptions)
    .subscribe((data:any)=>{
                    data = data.json();
                  this.storage.set('Data',data);
                  this.token = data.token; 
                  this.username = data.user.username;
                  httpOptions = {
                    headers : new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Token'+data.token})

                  }
                  console.log(data);
              }
              ,error=>{
                console.log(error);
              }
    )
  
  }
   userLogin (username : string , password : string){
    return this.http.post(apiUrl+'api/auth/login',{username,password}, httpOptions)
    .subscribe((data:any)=>{
                  this.storage.set('Data',data);
                  this.token = data.token;
                  this.username = data.user.username;
                  httpOptions = {
                    headers : new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Token'+data.token})

                  }
                  console.log(data);
                 }
              ,error=>{
                console.log(error);
              }
    )

  }
  getLevel(){

  /**      return this.http.get(apiUrl+'/getlevel',httpOptions)
    .subscribe(data=>{
        this.level = data;
    }
    ,error=>{
      console.log(error);
    }
    )**/
  }
  submitAns (answer : string , level_no : number){
  /**  return this.http.post(apiUrl+'/auth/submit/ans',{answer,level_no}, httpOptions)
    .subscribe(data=>{
                  if(data == true) {
                      //next level operations
                  }
                  else{
                    //retry
                  }
                  console.log(data);
              }
              ,error=>{
                console.log(error);
              }
    )
    **/

  }
  submitLocation(level_no : number ,lat : number ,long :number ){
  /**    return this.http.post(apiUrl+'/api/submit/location',{level_no,lat,long}, httpOptions)
    .subscribe(data=>{
                  if(data == true) {
                      //next level operations
                  }
                  else{
                    //retry
                  }
                  console.log(data);
              }
              ,error=>{
                console.log(error);
              }
    )
  **/
  }
  getPlayerDetail(){
   /**      return this.http.post(apiUrl+'/api/player',httpOptions)
    .subscribe(data=>{
                  this.userdetail = data;
                  console.log(data);
              }
              ,error=>{
                console.log(error);
              }
    ) **/
  }
  
}