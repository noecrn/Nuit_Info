import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-multi-langue',
  standalone: true,
  imports: [],
  templateUrl: './multi-langue.component.html',
  styleUrl: './multi-langue.component.scss'
})
export class MultiLangueComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {}
  naviguate_to_accueil () {
    this.router.navigate(['/accueil'])
  }
}
