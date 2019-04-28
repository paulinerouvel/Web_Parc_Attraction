import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IAttraction } from '../interface/IAttraction';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Attraction } from '../model/attraction';

//util si on veut injecter un service dans un autre service
//ça définit que c'est un service 
@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  constructor(private http : HttpClient) { }


  private _url: string = environment.UrlAPI + "/attraction";




  addAttraction(token : string, attr : Attraction) : Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.post<Attraction>(this._url, attr, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  //addImage(token, idAttraction, url)
  //post "/image" body : idAttraction / url

  getAttractions() : Observable<IAttraction[]>{
    return this.http.get<IAttraction[]>(this._url).pipe(catchError( this.handleError));
  }

  getAttractionById(id : number) : Observable<Attraction>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json'
    });

    return this.http.get<Attraction>(this._url + "?id=" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
  
  }
  //get by name : get => ?nom=

  //get by pass : get => ?passId=

  //get  images by attr : /image => ?id=

  //get all images : /image 

  updateAttraction(token : string, attr : Attraction) : Observable<any>{
    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.put<Attraction>(this._url, attr, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  deleteAttractions(token : string , id : string) : Observable<any>{

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

}
