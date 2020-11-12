import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

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

  GetAllPublicaciones(): Observable<any> {
    return this._http.get<any>(this.url + 'publicaciones')
    .pipe(
      delay(3000),
      retry(1),
      catchError(this.errorHandl)
    )
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
