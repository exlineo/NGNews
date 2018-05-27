import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-an-connexion',
  templateUrl: './an-connexion.component.html',
  styleUrls: ['./an-connexion.component.css']
})
export class AnConnexionComponent implements OnInit {

  donneesID = {
    login: '',
    mdp: ''
  };
  authErreur = false;
  connecte:boolean = false;

  constructor(private router: Router, public authService:AuthService) {
  }

  ngOnInit() {
  }
  // Authentifier à partir d'un http dans le service
  authentifier() {
    this.authErreur = false;
    this.authService.authentifier(this.donneesID)
      .subscribe(
        () => this.router.navigate(['/']),
        () => this.authErreur = true
      );
  }

}
