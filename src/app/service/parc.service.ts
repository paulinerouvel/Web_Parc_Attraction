import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IParc } from '../interface/IParc';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Parc } from '../model/parc';

@Injectable({
  providedIn: 'root'
})
export class ParcService {

  constructor(private http : HttpClient) { }


  private _url: string = environment.UrlAPI + "/parc";

  addParc(token : string, parc : Parc) : Observable<any>{
    let reqHeader = new HttpHeaders({
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.post<Parc>(this._url, parc, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  getParc() : Observable<Parc[]>{
    return this.http.get<IParc[]>(this._url).pipe(catchError( this.handleError));
  }

  getParcById(id : number) : Observable<Parc>{

    let reqHeader = new HttpHeaders({
      'accept': 'application/json',
      'content-type': 'application/json'
    });

    return this.http.get<Parc>(this._url + "?id=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));

  }

  updateParc(token : string, parc : Parc) : Observable<any>{
    let reqHeader = new HttpHeaders({
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.put<Parc>(this._url, parc, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  // Unused
  deleteParc(token : string , id : string) : Observable<any>{

    let reqHeader = new HttpHeaders({
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    });


    return this.http.delete<any>(this._url + "/" + id, {headers : reqHeader}).pipe(catchError( this.handleError));

  }
  //delete image : delete => /image/:id

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

  //get by id / get?id=

  //updateParc: put/ body: tout
}
