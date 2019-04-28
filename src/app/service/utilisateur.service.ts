import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  private _url: string = environment.UrlAPI + "/utilisateur";


  addUtilisateur(token : string, user : Utilisateur) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

    return this.http.post<Utilisateur>(this._url + "/register", user, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  addAccesParc(token : string, idParc: string, idUser : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
  });

    return this.http.post<Utilisateur>(this._url + "/accesParc", {idParc, idUser}, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

  addSortieParc(token : string, idParc: string, idUser : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
  });

    return this.http.post<Utilisateur>(this._url + "/sortieParc", {idParc, idUser}, {headers : reqHeader}).pipe(catchError( this.handleError));
  }



  addAccesAttraction(token : string, idAttraction: string, idUser : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
  });

    return this.http.post<Utilisateur>(this._url + "/accesAttraction", {idAttraction, idUser}, {headers : reqHeader}).pipe(catchError( this.handleError));
  }

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

 

  updateUtilisateur(token : string, user : Utilisateur) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

    return this.http.put<Utilisateur>(this._url, user, {headers : reqHeader}).pipe(catchError( this.handleError));
  }



  deleteUtilisateur(token : string, id : string) : Observable<any>{

    let reqHeader = new HttpHeaders({ 
      'accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + token
   });

    return this.http.delete<string>(this._url +"/" + id, {headers : reqHeader}).pipe(catchError( this.handleError));
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
