import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AuthService } from '../services/auth.service';
import { ConnexionService } from '../services/connexion.service';

import { isDevMode } from '@angular/core';
/**
 * Composant de connexion
 */
@Component({
  selector: 'app-an-connexion',
  templateUrl: './an-connexion.component.html',
  styleUrls: ['./an-connexion.component.css']
})
export class AnConnexionComponent implements OnInit {
  /**
   * Objet connecté au HTML pour récupérer les valeurs saisies dans les champs du formulaire d'authentification
   */
  donneesID = {
    login: '',
    mdp: ''
  };
  /**
   * Non implémenté, permettra de gérer les erreurs
   */
  authErreur: boolean;
  /**
   * Page de connexion
   * @param router On récupère la route
   * @param authService Service qui s'occupe de vérifier la validité de l'authentification
   * @param connexion Stockage du statut de l'authentification avec gestion du sessionStorage
   */
  constructor(private router: Router, public authService: AuthService, public connexion: ConnexionService) {
  }

  ngOnInit() {
  }

  /**
   * Utiliser Strapi comme back-end
   */
  authentification() {
    // Test si nous sommes en développement ou non
    if (isDevMode()) {
      this.authService.enregistre(this.donneesID);
    } else {
      // Simulation cf.
      this.authService.enregistre(this.donneesID);
      // Enregistrement sur un serveur Strapi
      // this.authService.enregistreStrapi({
      //   identifier: this.donneesID.login,
      //   password: this.donneesID.mdp
      // });
    }
  }
}
