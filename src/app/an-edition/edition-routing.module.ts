import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnEditionComponent } from './an-edition.component';
import { BlocEditionGuard } from '../services/bloc-edition.guard';

const routes: Routes = [
  { path: '', component: AnEditionComponent},
  { path: ':id', component: AnEditionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ ]
})
export class EditionRoutingModule { }
