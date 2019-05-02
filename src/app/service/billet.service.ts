import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Billet } from '../model/billet';

@Injectable({
  providedIn: 'root'
})
export class BilletService {

  constructor(private http : HttpClient) { }

  
  private _url: string = environment.UrlAPI + "/billet";



  addBillet(token : string, billet : Billet): Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

   return this.http.post<any>(this._url, billet, {headers : reqHeader}).pipe(catchError( this.handleError));

  }


  addAttractionToPass(token : string, idAttraction : string, idBillet : string, ordre: string){

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.post<any>(this._url, {idAttraction, idBillet, ordre}, {headers : reqHeader}).pipe(catchError( this.handleError));
  }



  
  getBillets() : Observable<Billet[]>{
  
    return this.http.get<Billet[]>(this._url).pipe(catchError( this.handleError));

  }


  getBilletById(id : string) : Observable<Billet>{
  
    return this.http.get<Billet>(this._url + "/" + id).pipe(catchError( this.handleError));

  }

  updateBillet(token : string, billet : Billet): Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.put<any>(this._url, billet, {headers : reqHeader}).pipe(catchError( this.handleError));

  }



  deleteBillet(token : string, id : string): Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.delete<any>(this._url + "?id=" + id,  {headers : reqHeader}).pipe(catchError( this.handleError));

  }

  deleteAttractionToPass(token : string, idAttraction : string, idBillet : string){

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return this.http.delete<any>(this._url +"?idBillet="+idBillet+"&idAttraction="+idAttraction, {headers : reqHeader}).pipe(catchError( this.handleError));
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
