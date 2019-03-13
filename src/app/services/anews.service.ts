import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { NouvellesModel } from '../modeles/nouvelles.modele';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class AnewsService{
  news: NouvellesModel[];
  news$: BehaviorSubject<NouvellesModel[]> = new BehaviorSubject<NouvellesModel[]>([]);
  
  constructor(private http: HttpClient) {
    this.chargeDonnees();
  }

  chargeDonnees() {
    this.http.get<NouvellesModel[]>('../assets/datas/nouvelles.json')
    .subscribe(data => {
      this.news = data;
      this.news$.next(data);
    });
  }

  // Récuperer une nouvelle en particulier
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
