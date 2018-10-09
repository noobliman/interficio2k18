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
  private extractData(res: Response) {
  let body = res;
  return body || { };
}
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return ErrorObservable.create('Something bad happened; please try again later.');
}
  public getUsers():Observable<any>{
  	return this.http.get(apiUrl,httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
      );
  }
  public createUser(user : User):Observable<any>{
    const url = apiUrl+'/users';
    return this.http.post(url, user, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  public getUserByID(userID : number):Observable<any>{
    const url = apiUrl+'/users/'+userID;
    return this.http.get(url, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
  }
  public updateUser(user : User){
    const url =  apiUrl + '/users/'+user.id;
    return this.http.put(url, user, httpOptions)
    .pipe(
      catchError(this.handleError)
    );

  }
  public deleteUser(userId : number){

  }

}
