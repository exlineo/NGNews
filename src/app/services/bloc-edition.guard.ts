import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from './connexion.service';

@Injectable()
export class BlocEditionGuard implements CanActivate {
  
  constructor(private route:Router, private connexion:ConnexionService){}
  // La guard qui va interdire l'affichage de la page d'édition
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // On récupère la donnée sur le service d'authentification
      if(this.connexion.connecte){
        return true;
      }
  }
  // La garde qui charge le module d'édition lorsque les utilisateurs sont connectés
  canLoad(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // On récupère la donnée sur le service d'authentification
      if(this.connexion.connecte){
        return true;
      }
  }
}
