import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IAttraction } from '../interface/IAttraction';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//util si on veut injecter un service dans un autre service
//ça définit que c'est un service 
@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  constructor(private http : HttpClient) { }


  private _url: string = "http://localhost:3000/attraction";
  getAttractions() : Observable<IAttraction[]>{

  
    return this.http.get<IAttraction[]>(this._url).pipe(catchError( this.handleError));
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
