import { Component, Input } from '@angular/core';
import { AuteurModel } from '../../modeles/auteurs.modele';

@Component({
  selector: 'app-anews-auteur',
  templateUrl: './anews-auteur.component.html',
  styleUrls: ['./anews-auteur.component.css']
})
export class AnewsAuteurComponent {

  @Input() auteur:AuteurModel;

  constructor() { }
}
