import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from './connexion.service';

@Injectable()
export class BlocEditionGuard implements CanActivate {
  
  constructor(private route:Router, private connexion:ConnexionService){}
  /**
   * La méthode canActivate permet de bloquer des routes. Elles doit renvoyer un booléen
   * @param next 
   * @param state 
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // On récupère la donnée sur le service d'authentification
      if(this.connexion.connecte){
        return true;
      }
  }
  /**
   * La garde qui charge le module d'édition lorsque les utilisateurs sont connectés
   * @param next 
   * @param state 
   */
  canLoad(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // On récupère la donnée sur le service d'authentification
      if(this.connexion.connecte){
        return true;
      }
  }
}
