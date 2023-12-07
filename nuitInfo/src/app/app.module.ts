import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiLanguageComponent } from './multi-language/multi-language.component';
import { TetrixComponent } from './tetrix/tetrix.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MultiLanguageComponent,
    TetrixComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
