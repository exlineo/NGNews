import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NouvellesModel } from '../modeles/nouvelles.modele';
import { forEach } from '@angular/router/src/utils/collection';

import { environment } from '../../environments/environment';

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
   * L'adresse de chargement des données est traitée avec la classe Location prepareExternalUrl pour tenir compte du basehref lors de la publication
   */
  chargeDonnees() {
    console.log("Appel des données à charger");
    // this.http.get<Array<NouvellesModel>>(this.location.prepareExternalUrl('/assets/datas/nouvelles.json'))
    this.http.get<Array<NouvellesModel>>(environment.REST_ADR+environment.NG_NEWS)
    .subscribe(data => {
      this.news = data;
      this.news$.next(data);
    },
    erreur => {
      console.log('Aie, il y a une erreur dans le chargement des données');
    });
  }
  /**
   * Mise à jour des données vers le script PHP (fonctionnel uniquement sur un serveur PHP)
   */
  miseAJourDonnees():Observable<any>{
    return this.http.post(this.location.prepareExternalUrl('/assets/php/setJson.php'), this.news)
    .pipe(
      catchError( erreur => this.handleError(erreur) )
    );
  }
  /**
   * Méthode d'identification d'une news spécifique à afficher. Prend en compte la valeur de ID
   * @param id index ou _id d'une noucelle à récupérer
   */
  getNews(id: number | string):NouvellesModel {
    // Tester si l'id de la news est de type ObjectId de MongoDB
    for(let i in this.news){
      console.log(i);
      if(this.news[i]['id'] == id){
        console.log("Objet retourné", i);
        return this.news[i];
      }
    }
  }
  /**
   * Gestion des erreurs des requêtes HTTP
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("Une erreur s'est produite : ", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `PHP renvoie une erreur ${error.status}, ` +
        `plus d'infos sur le body : ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      "Une erreur s'est produite lors de l'écriture des données, merci de rééssayer");
  };
}
