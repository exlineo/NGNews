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
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditionRoutingModule,
    TinymceModule.withConfig({skin_url:'./assets'})
  ],
  declarations: [
    AnEditionComponent,
    NewsPipe,
    FiltrerPipe,
    AnAuteursComponent
  ]
})
export class EditionModule { }
