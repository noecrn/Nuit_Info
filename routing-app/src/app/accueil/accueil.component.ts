import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import os from 'os';

interface ExtendedPerformance extends Performance {
  memory?: {
    usedJSHeapSize: number;
  };
}

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
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
