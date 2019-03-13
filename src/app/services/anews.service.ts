import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { NouvellesModel } from '../modeles/nouvelles.modele';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class AnewsService{
  /**
   * Objet dans lequel nous stockons les données chargées en Ajax. Elles seront sous le format tableau de NouvelleModel, une interface Typescript (cf. le dossier modeles)
   */
  news: NouvellesModel[];
  /**
   * Le BehavioSubject est un observable qui s'initialise avec des données de base évitant des erreurs liées à un objet vide. Nous l'utilisons pour montrer comment ça marche mais nous pouvons nous en passer dans l'application
   */
  news$: BehaviorSubject<NouvellesModel[]> = new BehaviorSubject<NouvellesModel[]>([]);
  prepareNews:string;
  /**
   * Service de chargement et gestion des news à afficher dans l'application
   * @param http Instanciation de la classe HttpClient pour utiliser des requêtes Ajax
   * @param location Donner une base aux URLs pour éviter les erreurs de chargement local
   */
  constructor(private http: HttpClient, private location:Location) {
    this.chargeDonnees();
  }
  /**
   * Appel des données en Ajax et sauvegarde dans un objet news et un observable news$ pour l'exemple
   */
  chargeDonnees() {
    this.http.get<NouvellesModel[]>(this.location.prepareExternalUrl('/assets/datas/nouvelles.json'))
    .subscribe(data => {
      this.news = data;
      this.news$.next(data);
    });
  }

  /**
   * Méthode d'identification d'une news spécifique à afficher. Prend en compte la valeur de ID
   * @param id index ou _id d'une noucelle à récupérer
   */
  getNews(id: number | string):NouvellesModel {
    // let tmp = this.news$.getValue();
    // Tester si l'id de la news est de type ObjectId de MongoDB
    for(let i in this.news){
      console.log(i);
      if(this.news[i]['_id'] == id){
        console.log("Objet retourné", i);
        return this.news[i];
      }
    }
  }

}
