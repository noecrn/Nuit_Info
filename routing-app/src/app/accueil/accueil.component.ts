import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

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
  ) {}


  naviguate_to_tetris () {
    this.router.navigate(['/tetris'])
  }
}
