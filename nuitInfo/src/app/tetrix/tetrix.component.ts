import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-tetrix',
  templateUrl: './tetrix.component.html',
  styleUrl: './tetrix.component.scss'
})
export class TetrixComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {}


  naviguate_to_accueil () {
    this.router.navigate(['/accueil'])
  }


}
