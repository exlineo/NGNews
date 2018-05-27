import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnEditionComponent } from './an-edition.component';
import { NewsPipe } from './news.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AnEditionComponent,
    NewsPipe
  ]
})
export class EditionModule { }
