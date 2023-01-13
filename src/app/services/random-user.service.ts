import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Results, IRandomContact } from '../models/randomuser';



@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient)
  { }

  handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error(`Ha ocurrido un error: ${error.error}`);
    }else{
      console.error(`Erro en el backend: ${error.error}. El error es: ${error.error}`);
    }

    return throwError(() => new Error('Error en la petición de contacto aleatorio'));
  }

  obtenerRandomContact(): Observable<Results>{
    return this.http.get<Results>('https://randomuser.me/api')
      .pipe(
        retry(2), //N° de reintentos de peticiones
        catchError(this.handleError) //sacamos error
      );
  }

  obtenerRandomContacts(n: number, sexo?:string): Observable<Results>{
    let params: HttpParams = new HttpParams().set("results",n);

    if(sexo){
      console.log('filtrado por MUJER / HOMBRE');
      params = params.append("gender",sexo);
    }
    return this.http.get<Results>('https://randomuser.me/api', {params: params}).pipe(
        retry(2), //N° de reintentos de peticiones
        catchError(this.handleError) //sacamos error
      );
  }
}
