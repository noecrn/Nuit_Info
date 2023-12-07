import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrl: './multi-language.component.scss'
})
export class MultiLanguageComponent {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
  ) {}
  naviguate_to_accueil () {
    this.router.navigate(['/accueil'])
  }

}
