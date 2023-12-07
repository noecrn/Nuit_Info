import { Routes } from '@angular/router';
import { AccueilComponent } from "./accueil/accueil.component";
import {TetrisComponent} from "./tetris/tetris.component";
import {MultiLangueComponent} from "./multi-langue/multi-langue.component";

export const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent },
  { path: 'tetris', component: TetrisComponent },
  { path: 'multilangue', component: MultiLangueComponent },
  {path: '**', redirectTo: 'accueil'},
];
