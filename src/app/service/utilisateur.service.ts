import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  private _url: string = environment.UrlAPI + "/utilisateur";

  //adduser : post /register body: toute les infos

  //addAcces parc /accesParc : post body: idParc, idUser

  //addSortieParc /sortieParc : post body : idParc, idUser 

  //addAccesAttraction: post body: /accesAttraction: body: idUser, idAttraction

  getUtilisateurById(token : string, id : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

  
    return this.http.get<string>(this._url +  "?id=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  //get by email: get: body :mail

  getAllUtilisateurs(token : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

  
    return this.http.get<string>(this._url, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  //update: put/ body : tout


  //delete/:id


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
