import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AnewsService } from '../services/anews.service';
import { NouvellesModel } from '../modeles/nouvelles.modele';
import { AuthService } from '../services/auth.service';
import { NewsPipe } from './news.pipe';

@Component({
  selector: 'app-an-edition',
  templateUrl: './an-edition.component.html',
  styleUrls: [
    './an-edition.component.css',
    '../../node_modules/froala-editor/css/froala_editor.pkgd.min.css',
    '../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class AnEditionComponent implements OnInit, OnDestroy {

  newsId:number;
  // news:NouvellesModel={id:-1, titre:'',description:'',img:''};
  news:NouvellesModel[];
  newsActu:NouvellesModel;

  filtre:string; // Filtrage des données de la liste des articles

  donnees$:Subscription; // Récupération des données des Nouvelles

  constructor(public donnees:AnewsService, private routeParams:ActivatedRoute, public authService:AuthService) {}

  // Initialiser la news à éditer
  ngOnInit() {
    this.newsId = 0; // Paramétrer une valeur par défaut à l'ID
    this.routeParams.params.subscribe(params => {
      this.newsId = +params['id'];
      this.news = this.donnees.news$.getValue();
      this.newsActu = this.news[this.newsId]; // (+) converts string 'id' to a number
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
    
  }
  // Recevoir les données du submit
  edition(f:NgForm){
    console.log(f.value);
  }
  // Changer la news à éditer
  setNewsActu(e:any){
    this.newsActu = this.news[e.target.value];
    console.log(this.newsActu);
  }
  // Arréter les souscriptions
  ngOnDestroy(){
    this.donnees$.unsubscribe();
  }
}
