import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Billet_utilisateur } from '../model/billet_utilisateur';


@Injectable({
  providedIn: 'root'
})
export class BilletUtilisateurService {

  constructor(private http : HttpClient) { }

  private _url: string = environment.UrlAPI + "/billet_utilisateur";

  //addBU: post body : tout

  addBU(token : string, BU : Billet_utilisateur): Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.post<any>(this._url, BU,  {headers : reqHeader}).pipe(catchError( this.handleError));

  }


  //get bu by idUtilisateur : ?id=
  getBUByUser(token : string, idUser : string): Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.get<any>(this._url + '?id=' + idUser, {headers : reqHeader}).pipe(catchError( this.handleError));

  }

  getBUById(token : string, idBillet : string): Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.get<any>(this._url + '?idBillet=' + idBillet, {headers : reqHeader}).pipe(catchError( this.handleError));

  }

  //get all: get/

  //get by dateAchat : get?idUtilisateur=&date=

  //getbydateFilter : get?idUtilisateur=&from&to=

  getBUByDateFilter(token : string, idUser : string, from: string, to: string): Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.get<any>(this._url + '?idUtilisateur=' + idUser + "&from=" +from + "&to=" + to, {headers : reqHeader}).pipe(catchError( this.handleError));

  }

  updateBU(token : string, upBU : Billet_utilisateur): Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.put<any>(this._url , upBU, {headers : reqHeader}).pipe(catchError( this.handleError));

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
