import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-tetris',
  standalone: true,
  imports: [],
  templateUrl: './tetris.component.html',
  styleUrl: './tetris.component.scss'
})
export class TetrisComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {}


  naviguate_to_accueil () {
    this.router.navigate(['/accueil'])
  }

}
