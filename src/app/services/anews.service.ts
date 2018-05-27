import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { NouvellesModel } from '../modeles/nouvelles.modele';

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
  getNews(id: number) {
    let tmp = this.news.getValue();
    return tmp[id];
  }

}
