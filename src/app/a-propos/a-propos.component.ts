import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css'],
  animations: [
    trigger('bounce', [transition('void => *', useAnimation(bounce))])
  ]
})
export class AProposComponent implements OnInit {
  bounce: any;
  constructor() { }

  ngOnInit() {
  }
  logAnimation($event){
    console.log("done");
  }
}
