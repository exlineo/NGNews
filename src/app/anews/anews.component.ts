import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NouvellesModel } from '../modeles/nouvelles.modele';
import { AnewsService } from '../services/anews.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-anews',
  templateUrl: './anews.component.html',
  styleUrls: ['./anews.component.css']
})
export class AnewsComponent implements OnInit{
  
  news:NouvellesModel[];
  visible:boolean=false;

  constructor(private donnees:AnewsService, private route:Router, public authService:AuthService) {  }

  ngOnInit() {
    this.news = this.donnees.news$.getValue(); // Si le tableau est déjà chargé
    console.log("Données initiées", this.news);
    this.donnees.news$.subscribe(
      data => {
        console.log("Données prêtes", data);
        this.news = data;
    });
  }

  goNews(newsId:number){
    console.log(newsId);
    this.route.navigate(['/news', newsId]);
  }
  confirme(){
    console.log("C'est cliqué");
  }
}
