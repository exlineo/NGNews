import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnEditionComponent } from './an-edition.component';
import { NewsPipe } from './news.pipe';
import { TinymceModule } from 'angular2-tinymce';
import { AnAuteursComponent } from './an-auteurs/an-auteurs.component';
import { EditionRoutingModule } from './edition-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditionRoutingModule,
    TinymceModule.withConfig({})
  ],
  declarations: [
    AnEditionComponent,
    NewsPipe,
    AnAuteursComponent
  ]
})
export class EditionModule { }
