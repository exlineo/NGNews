import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AuthService } from '../services/auth.service';
import { ConnexionService } from '../services/connexion.service';

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

  constructor(private router: Router, public authService:AuthService, private connexion:ConnexionService) {
  }

  ngOnInit() {
  }
}
