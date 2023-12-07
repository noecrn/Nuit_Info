import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {
  }

  naviguate_to_tetris () {
    window.performance.measure("Auguste")
    this.router.navigate(['/tetris'])
  }
  naviguate_to_multi_langue () {
    this.router.navigate(['/multilangue'])
  }

}
