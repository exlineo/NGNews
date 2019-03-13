import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConnexionService } from './connexion.service';

@Injectable()
export class AuthService {
  
  connexionSub:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private connexion:ConnexionService) {
    this.connexion.connecte = this.recupereConnexion();
  }
  // Créer un nouveau compte
  enregistre(login, mdp): Observable<any> {
    const body = { login, mdp };
    return this.http.post('assets/datas/id.json', body);
  }
  // S'identifier en utilisant un observable
  authentifier(ids): Observable<any> {
    return this.http.post('assets/datas/id.json', ids);
  }
  // Stock l'enregistrement dans le local storage
  stockConnexion(tag: boolean) {
    this.connexion.connecte = tag;
    sessionStorage.setItem('connexion', JSON.stringify(tag));
  }
  // Récupérer la connexion si elle a été stockée
  recupereConnexion():boolean{
    if(sessionStorage.getItem('connexion')){
      return JSON.parse(sessionStorage.getItem('connexion'));
    }
      return this.connexion.connecte;
  }
}
