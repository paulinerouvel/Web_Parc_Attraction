import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Utilisateur} from "../model/utilisateur";
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public _url = environment.UrlAPI + "/utilisateur";

  constructor(private http : HttpClient) { }

  
  register(utilisateur : Utilisateur) : Observable<any>{
    
    let reqHeader = new HttpHeaders({ 
      'Authorization': 'SECRET',
      'Accept': 'application/json',
      'Content-Type': 'application/json'

   });
    return this.http.post<Utilisateur>(this._url + "/register", utilisateur, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  login(utilisateur : Utilisateur) : Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json'

      
   });



    return this.http.post<Utilisateur>(this._url + "/login", utilisateur, {headers : reqHeader}).pipe(catchError( this.handleError));
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
    return throwError(
      'The connection to API failed.');
  };

}

