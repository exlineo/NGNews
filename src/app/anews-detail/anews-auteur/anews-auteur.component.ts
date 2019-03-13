import { Component, Input } from '@angular/core';
import { AuteursModel } from '../../modeles/auteurs.modele';

@Component({
  selector: 'app-anews-auteur',
  templateUrl: './anews-auteur.component.html',
  styleUrls: ['./anews-auteur.component.css']
})
export class AnewsAuteurComponent {
  /**
   * @param auteur Cette valeur est reçue du composant parent (un objet optionnel contenant les paramètres de l'auteur cf. le modèle correspondant)
   */
  @Input() auteur:AuteursModel;

  constructor() {
  }
}
