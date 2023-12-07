import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {TetrisComponent} from "./tetris/tetris.component";
import {MultiLangueComponent} from "./multi-langue/multi-langue.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AccueilComponent,
    TetrisComponent,
    MultiLangueComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routing-app';
}
