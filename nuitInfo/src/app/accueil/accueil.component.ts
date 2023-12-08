import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {interval} from "rxjs";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {

  metre_fait_avec_une_voiture: number = this.appComponent.metre_fait_avec_une_voiture;
  nbr_arbre_couper: number = this.appComponent.nbr_arbre_couper;

  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {
  }

  ngOnInit() {
    this.loop_accueil();
  }

  loop_accueil() {
  }

  naviguate_to_tetris () {
    window.performance.measure("Auguste")
    this.router.navigate(['/tetris'])
  }
  naviguate_to_multi_langue () {
    this.router.navigate(['/multilangue'])
  }



}
