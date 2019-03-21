import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class SecuriteIntercepteur implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status == 401) {
            console.log("Une erreur s'est produite");
            console.log(error); // Récupérer les erreurs et les affichers
            return Observable.throw(error); // Renvoyer l'erreur
          }
      })) as any;
    }
}