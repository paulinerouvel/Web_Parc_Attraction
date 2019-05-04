import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  constructor(private http : HttpClient) { }

  private _url: string = environment.UrlAPI;


  getParcFreq(token : string, id : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

  
    return this.http.get<string>(this._url +  "/parc/frequentation?id=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  getParcFreqTR(token : string, id : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

  
    return this.http.get<string>(this._url +  "/parc/frequentationTR?id=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
  }



  getParcFreqByDate(token : string, id : string, from: string, to: string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
  
    return this.http.get<string>(this._url +  "/parc/frequentation?idParc=" + id + "&from=" + from + "&to=" + to, 
    {headers : reqHeader}).pipe(catchError( this.handleError));
  }



  getAParcFreqByYearAndMonth(token : string, id : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

  
    return this.http.get<string>(this._url +  "/parc/frequentationStats?id=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
  }
  //get parc frec by month & year : /frequentationStats?id=

  getAttrFreq(token : string, id : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

  
    return this.http.get<string>(this._url +  "/attraction/frequentation?id=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
  }


  getAttrFreqByDate(token : string, id : string, from: string, to: string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
  
    return this.http.get<string>(this._url +  "/attraction/frequentation?idAttraction=" + id + "&from=" + from + "&to=" + to, 
    {headers : reqHeader}).pipe(catchError( this.handleError));
  }



  getAttrFreqByMonthAndYear(token: string, id : string){
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
  
    return this.http.get<string>(this._url +  "/attraction/frequentationStats?id=" + id, 
    {headers : reqHeader}).pipe(catchError( this.handleError));
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
