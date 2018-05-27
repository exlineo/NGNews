import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnEditionComponent } from './an-edition.component';
import { BlocEditionGuard } from '../services/bloc-edition.guard';

const routes: Routes = [
  { path: 'edition', component: AnEditionComponent, canActivate: [BlocEditionGuard] },
  { path: 'edition/:id', component: AnEditionComponent, canActivate: [BlocEditionGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ ]
})
export class EditionRoutingModule { }
