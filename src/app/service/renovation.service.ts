import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Renovation } from '../model/renovation';

@Injectable({
  providedIn: 'root'
})
export class RenovationService {

  constructor(private http : HttpClient) { }

  private _url: string = environment.UrlAPI + "/renovation";


  addRenovation(token : string, renov: Renovation) : Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

  
    return this.http.post<Renovation>(this._url, renov ,{headers : reqHeader}).pipe(catchError( this.handleError));
  }

  getRenovationsById(token : string, id : string) : Observable<Renovation[]>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

  
    return this.http.get<Renovation[]>(this._url +  "?id=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  getRenovationsByIdUtilisateur(token : string, id : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

   //getAll renovs : get/

   //get renov by date : get?idAttraction=&from=&to=
  
    return this.http.get<string>(this._url +  "?idUtilisateur=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
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
