import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { EditionModule } from './an-edition/edition.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AnewsComponent } from './anews/anews.component';
import { AnConnexionComponent } from './an-connexion/an-connexion.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { AnewsDetailComponent } from './anews-detail/anews-detail.component';
import { MenuComponent } from './menu/menu.component';
import { AnewsAuteurComponent } from './anews-detail/anews-auteur/anews-auteur.component';
import { AnewsRelativeComponent } from './anews-detail/anews-relative/anews-relative.component';
import { AnewsreserveesComponent } from './anews/anewsreservees/anewsreservees.component';

import { AnewsService } from './services/anews.service';
import { AuthService } from './services/auth.service';
import { AuthIntercepteur } from './services/auth.intercepteur';
import { SecuriteIntercepteur } from './services/securite.intercepteur';

@NgModule({
  declarations: [
    AppComponent,
    AnewsComponent,
    AnConnexionComponent,
    Erreur404Component,
    AnewsDetailComponent,
    MenuComponent,
    AnewsAuteurComponent,
    AnewsRelativeComponent,
    AnewsreserveesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [AnewsService, AuthService, { provide: HTTP_INTERCEPTORS, useClass:AuthIntercepteur, multi: true }, { provide: HTTP_INTERCEPTORS, useClass:SecuriteIntercepteur, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
