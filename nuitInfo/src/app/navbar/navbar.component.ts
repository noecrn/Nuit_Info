import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

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
  naviguate_to_home () {
    this.router.navigate(['/acceuil'])
  }
}
