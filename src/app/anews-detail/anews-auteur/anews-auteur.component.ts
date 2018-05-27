import { Component, OnInit } from '@angular/core';
import { AnewsService } from '../../services/anews.service';
import { ActivatedRoute } from '@angular/router';
import { NouvellesModel } from '../../modeles/nouvelles.modele';
import { Subscription } from 'rxjs';
import { Auteur } from '../../modeles/auteurs.modele';

@Component({
  selector: 'app-anews-auteur',
  templateUrl: './anews-auteur.component.html',
  styleUrls: ['./anews-auteur.component.css']
})
export class AnewsAuteurComponent implements OnInit {

  newsId: number;
  donneesSub: Subscription;
  auteur: Auteur;

  constructor(public donnees: AnewsService, private routeParams: ActivatedRoute) { }

  ngOnInit() {
    this.routeParams.parent.params.subscribe(params => {
      console.log(params);
      this.newsId = +params['id']; // (+) converts string 'id' to a number
      this.auteur = this.donnees.news[this.newsId]['auteur'];
      // this.auteur = this.donnees.news.getValue()[this.newsId]['auteur'];
      console.log('News', this.newsId, this.auteur);
   });
  }

}
