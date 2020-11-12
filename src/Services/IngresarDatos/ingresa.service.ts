import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngresaService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = "https://71afbcd6.ngrok.io/";
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public sendInfo( correo: string, contra: string): Observable<any> {

    var user = {
      "correo":correo,
      "contrasenia":contra
    };


    return this._http.post(this.url + 'login', user, this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }


  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
