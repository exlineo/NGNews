import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlocEditionGuard } from './services/bloc-edition.guard';
import { AppComponent } from './app.component';
import { AnewsComponent } from './anews/anews.component';
import { AnewsDetailComponent } from './anews-detail/anews-detail.component';
import { AnEditionComponent } from './an-edition/an-edition.component';
import { AnConnexionComponent } from './an-connexion/an-connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AnewsAuteurComponent } from './anews-detail/anews-auteur/anews-auteur.component';
import { AnewsRelativeComponent } from './anews-detail/anews-relative/anews-relative.component';

/**
 * Liste des routes utilisées dans l'application
 * Les routes relative au module d'édition sont gérées directement dans le module des routes dédié
 */
const routes: Routes = [
  { path: '', component: AnewsComponent },
  { path: 'news', component: AnewsDetailComponent },
  { path: 'news/:id', component: AnewsDetailComponent,
  children: [
    { path: 'auteur', component: AnewsAuteurComponent },
    { path: 'relatif', component: AnewsRelativeComponent }
  ] },
  { path: 'edition', loadChildren: './an-edition/edition.module#EditionModule', canLoad: [BlocEditionGuard] },
  { path: 'connexion', component: AnConnexionComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: Erreur404Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ BlocEditionGuard ]
})
export class AppRoutingModule { }
