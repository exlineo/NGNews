import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo:string = 'assets/images/angular_news.png';

  /**
   * Composant de base initié dans le bootstrap du module principal
   * @param titre Titre de l'application affiché dans le navigateur
   * @param metas Les métadonnées de l'application
   */
  constructor(private titre:Title, metas:Meta) {
    titre.setTitle('Angular News - quelques infos');
    metas.addTag({ name: 'author', content: 'exlineo / Gérald Abbadie' });
  }
}