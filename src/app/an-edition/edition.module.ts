import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnEditionComponent } from './an-edition.component';
import { NewsPipe, FiltrerPipe } from './news.pipe';
import { TinymceModule } from 'angular2-tinymce';
import { AnAuteursComponent } from './an-auteurs/an-auteurs.component';
import { EditionRoutingModule } from './edition-routing.module';
/**
 * Module tiers chargé lorsque la route edition est appelée et que l'authentification est valide
 * L'intégration de tinymce nécessite de paramétrer les URL pour la mise en production
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditionRoutingModule,
    TinymceModule.withConfig({
      baseURL:'./',
      skin_url: './assets/tinymce/skins/lightgray'
    })
  ],
  declarations: [
    AnEditionComponent,
    NewsPipe,
    FiltrerPipe,
    AnAuteursComponent
  ]
})
export class EditionModule { }
