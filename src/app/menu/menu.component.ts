import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() logo:string;
  /**
   * Menu de l'application. Il gère les liens vers les routes
   * @param connexion Vérifier l'authentification des internautes
   */
  constructor(public connexion:ConnexionService) { }

  ngOnInit() {
  }

}
