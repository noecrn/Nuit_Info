import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {TetrixComponent} from "./tetrix/tetrix.component";
import {MultiLanguageComponent} from "./multi-language/multi-language.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent },
  { path: 'tetris', component: TetrixComponent },
  { path: 'multilangue', component: MultiLanguageComponent },
  {path: '**', redirectTo: 'accueil'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
