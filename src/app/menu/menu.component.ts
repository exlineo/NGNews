import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() logo:string;
  etatConnexion:boolean;
  connecte:boolean = false;

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

}
