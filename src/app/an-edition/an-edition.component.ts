import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AnewsService } from '../services/anews.service';
import { NouvellesModel } from '../modeles/nouvelles.modele';
import { NewsPipe } from './news.pipe';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-an-edition',
  templateUrl: './an-edition.component.html',
  styleUrls: [
    './an-edition.component.css'
  ]
})
export class AnEditionComponent implements OnInit, OnDestroy, AfterViewInit{

  newsId:number;
  // news:NouvellesModel={id:-1, titre:'',description:'',img:''};
  news:NouvellesModel[];
  newsActu:NouvellesModel;
  filtre:string; // Filtrage des données de la liste des articles
  donnees$:Subscription; // Récupération des données des Nouvelles

  /**
   * 
   * @param donnees Pointeur vers le service de données pour accéder à la liste des news chargées
   * @param routeParams Instancier le router pour récupérer les id éventuels
   */
  constructor(public donnees:AnewsService, private routeParams:ActivatedRoute) {}

  /**
   * Initialisation du composant
   * On définit la news à éditer en récupérant le paramètre ID de la route
   * Si aucun paramètre n'est défini, on affiche la première route
   */
  ngOnInit() {
    this.newsId = 0; // Paramétrer une valeur par défaut à l'ID
    this.routeParams.params.subscribe(params => {
      this.newsId = +params['id'];
      this.news = this.donnees.news;
      this.newsActu = this.donnees.getNews(this.newsId); // (+) converts string 'id' to a number
      // Récupérer les données du service
      this.donnees$ = this.donnees.news$.subscribe(
        data => {
          this.news = data;
            console.log(this.news);
          if(this.newsId){
            // Identifier la nouvelle qui nous intéresse
            this.newsActu = this.news[this.newsId];
          }else{
            this.newsActu = this.news[0];
          }
      });
    });
    console.log("édition chargée");
  }
  
  ngAfterViewInit() {
  }

  /**
   * Fonction appelée lors de la soumission du formulaire
   * @param f Données saisies dans le formulaire
   */
  edition(f:NgForm){
    this.donnees.miseAJourDonnees()
    .subscribe(
      () => alert("Données enregistrées")
    );;
    console.log(f.value);
  }
  /**
   * Sélectionner une news
   * @param e ID de la news à afficher (index du tableau des news)
   */
  setNewsActu(e:any){
    this.newsActu = this.news[e.target.value];
    console.log(this.newsActu);
  }
  /**
   * Mettre fin aux souscriptions des observables pour éviter la surcharge de la mémoire
   */
  ngOnDestroy(){
    this.donnees$.unsubscribe();
  }
}
