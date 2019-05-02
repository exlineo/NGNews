import { Component, OnInit, isDevMode } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Nettoyer du html dans une chaîne
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NouvellesModel } from '../modeles/nouvelles.modele';
import { AnewsService } from '../services/anews.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-anews',
  templateUrl: './anews.component.html',
  styleUrls: ['./anews.component.css']
})
export class AnewsComponent implements OnInit{
  /**
   * Liste sauvegardée des news
   */
  news:NouvellesModel[];
  visible:boolean=false;
  /**
   * Composant de listing des news, constitue la page d'accueil
   * @param donnees Service qui récupère et stocke les données
   * @param route Récupérer les routes
   * @param sanitizer Un outil pour traiter les balise HTML dans les textes, afin de les afficher et les traiter s'il y en a
   * @param connexion Savoir si l'internaute est connecté ou non
   */
  constructor(private donnees:AnewsService, private route:Router, public sanitizer: DomSanitizer, private connexion:ConnexionService) {  }
  /**
   * Démonstration de l'utilisation d'observables pour récupérer et synchroniser des données
   */
  ngOnInit() {
    this.news = this.donnees.news$.getValue(); // Si le tableau est déjà chargé
    this.donnees.news$.subscribe(
      data => {
        this.news = data;
    });
  }
  /**
   * Aller sur la page du détail des news en transmettant l'index de la news à afficher
   * @param newsId Index de la news à afficher. Pourrait être remplacée par l'_id de la news
   */
  goNews(newsId:number){
    this.route.navigate(['/news', newsId]);
  }
  /**
   * Une fonction qui ne sert à rien ^^ ou presque
   */
  confirme(){
    console.log("C'est cliqué");
  }
}
