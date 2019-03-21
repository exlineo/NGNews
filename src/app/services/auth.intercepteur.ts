import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError} from "rxjs/internal/operators";

@Injectable()
export class AuthIntercepteur implements HttpInterceptor{
  /**
   * Interepteur qui ajouter un token d'identification à chaque requête HTTP sortante
   * L'intercepteur clone un requête, transforme la requête clonée et l'envoie
   */
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interception d'une requête ... ");
    // Cloner la requête
    const authReq = req.clone({ headers: req.headers.set("Authorization", "AUTH_TOKEN")});
    console.log("La requête va être envoyée avec un nouveau header intégrant une autorisation...");
    // Envoyer la nouvelle requête
    return next.handle(authReq)
    .pipe(
      catchError((error) => {
        console.log("Une erreur s'est produite");
        console.log(error); // Récupérer les erreurs et les affichers
        return Observable.throw(error); // Renvoyer l'erreur
    })) as any;
  }
}
