import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AnewsService } from '../services/anews.service';
import { NouvellesModel } from '../modeles/nouvelles.modele';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-an-edition',
  templateUrl: './an-edition.component.html',
  styleUrls: ['./an-edition.component.css']
})
export class AnEditionComponent implements OnInit, OnDestroy {

  newsId:number;
  // news:NouvellesModel={id:-1, titre:'',description:'',img:''};
  news:NouvellesModel[];
  newsActu:NouvellesModel;

  donnees$:Subscription; // Récupération des données des Nouvelles

  constructor(private donnees:AnewsService, private routeParams:ActivatedRoute, public authService:AuthService) {}

  // Initialiser la news à éditer
  ngOnInit() {
    this.newsId = 0; // Paramétrer une valeur par défaut à l'ID
    this.routeParams.params.subscribe(params => {
      this.newsId = +params['id'];
      this.newsActu = this.donnees.getNews(+params['id']); // (+) converts string 'id' to a number
      // Récupérer les données du service
      this.donnees$ = this.donnees.news$.subscribe(
        data => {
          if(this.newsId){
            // Identifier la nouvelle qui nous intéresse
            this.newsActu = data[this.newsId];
          }
      });
    });
    
  }
  // Recevoir les données du submit
  edition(f:NgForm){
    console.log(f.value);
  }
  // Arréter les souscriptions
  ngOnDestroy(){
    this.donnees$.unsubscribe();
  }
}
