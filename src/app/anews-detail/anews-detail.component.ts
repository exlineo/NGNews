import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Nettoyer du html dans une chaîne

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { NouvellesModel } from '../modeles/nouvelles.modele';
import { AnewsService } from '../services/anews.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-anews-detail',
  templateUrl: './anews-detail.component.html',
  styleUrls: ['./anews-detail.component.css']
})
export class AnewsDetailComponent implements OnInit, OnDestroy {

  newsId:number;

  donnees$:Subscription;

  news:NouvellesModel[];
  newsActu:NouvellesModel;

  constructor(public donnees:AnewsService, private routeParams:ActivatedRoute, public authService:AuthService, public sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    this.newsId = 0; // Valeur par défaut de newsId corrigée sir

    this.routeParams.params.subscribe(params => {
      // Paramétrage de l'actualité si le tableau est déjà chargé
      this.newsId = +params['id']; // (+) converts string 'id' to a number
      this.newsActu = this.donnees.news$.getValue()[this.newsId];
      // console.log("News actu", this.newsActu, this.donnees.news$.getValue(), this.donnees.news);
      this.donnees$ = this.donnees.news$.subscribe(
        data => {
          // this.news = data;
          if(this.newsId){
            this.news = data;
            this.newsActu = data[this.newsId];
          }
      });
   });
   
  }
  // Destruction des données à la déconnexion
  ngOnDestroy(){
    this.donnees$.unsubscribe();
  }

}
