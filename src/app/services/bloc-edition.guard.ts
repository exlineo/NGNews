import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {AuthService} from './auth.service';

@Injectable()
export class BlocEditionGuard implements CanActivate {
  
  constructor(private authService:AuthService){}
  // La guard qui va interdire l'affichage de la page d'édition
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // On récupère la donnée sur le service d'authentification
      if(this.authService.connecte){
        return true;
      }
  }
}
