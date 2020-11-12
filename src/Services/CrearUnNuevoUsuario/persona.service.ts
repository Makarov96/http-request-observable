import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public url:string;

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

  public sendInfo(
    nombre:string, nombredos:string, apellido:string,
    apellidodos:string,dpi:string,nit:string,correo:string,
    contra:string,tipoTrabajo:string,celular:string):Observable<any>{
      
      var user= {
        "personalInformation":{
          "nombre":nombre,
          "nombre2":nombredos,
          "apellido":apellido,
          "apellido2":apellidodos,
          "dpi":dpi,
          "nit":nit,
          "tipoTrabajo":tipoTrabajo
        },
        "credentialInformation":{
          "correo":correo,
          "contrasenia":contra,
          "rol":tipoTrabajo
        },
        "phoneInformation":{
          "numero":celular
        }
      };

    
      let json = JSON.stringify(user);

    return this._http.post(this.url+'usuarios',json, this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)

    );
  }


  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
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

