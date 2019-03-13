import { Injectable } from '@angular/core';
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
  
  /**
   * Service de chargement et gestion des news à afficher dans l'application
   * @param http Instanciation de la classe HttpClient pour utiliser des requêtes Ajax
   */
  constructor(private http: HttpClient) {
    this.chargeDonnees();
  }
  /**
   * Appel des données en Ajax et sauvegarde dans un objet news et un observable news$
   */
  chargeDonnees() {
    this.http.get<NouvellesModel[]>('../assets/datas/nouvelles.json')
    .subscribe(data => {
      this.news = data;
      this.news$.next(data);
    });
  }

  /**
   * Méthode d'identification d'une news spécifique à afficher. Prend en compte la valeur de ID
   * @param id index ou _id d'une noucelle à récupérer
   */
  getNews(id: number | string) {
    // Tester si l'id de la news est de type ObjectId de MongoDB
    if(typeof id == 'string'){
      if(id.indexOf('_')){
        for(let i in this.news){
          if(i['_id'] == id){
            return i;
          }
        }
      }
    }
    // Sinon on renvoie la news du tableau des news
    let tmp = this.news$.getValue();
    return tmp[id];
  }

}
