import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConnexionService } from './connexion.service';

@Injectable()
export class AuthService {
    /**
     * Gérer les échanges Http lors d'une authentification d'un internaute
     * @param http Une instance de HttpClient pour les appels Ajax
     * @param connexion Instance du service ConnexionService qui regroupe les objets et méthodes liés aux authentifications
    */
  constructor(private http: HttpClient, private connexion:ConnexionService) {
    this.connexion.connecte = this.connexion.recupereConnexion();
  }
  /**
   * Exemple de méthode utilisable pour gérer l'authentification avec un serveur distant
   * @param login Login à transmettre au serveur distant
   * @param mdp Mot de passe à transmettre au serveur distant
   */
  enregistre(login, mdp): Observable<any> {
    const body = { login, mdp };
    return this.http.post('assets/datas/id.json', body);
  }
}
