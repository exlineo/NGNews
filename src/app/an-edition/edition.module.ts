import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnEditionComponent } from './an-edition.component';
import { NewsPipe } from './news.pipe';
import { TinymceModule } from 'angular2-tinymce';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TinymceModule.withConfig({})
  ],
  declarations: [
    AnEditionComponent,
    NewsPipe
  ]
})
export class EditionModule { }
