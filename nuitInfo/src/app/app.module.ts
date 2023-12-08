import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiLanguageComponent } from './multi-language/multi-language.component';
import { TetrixComponent } from './tetrix/tetrix.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterOutlet} from "@angular/router";
import { AnimationComponent } from './animation/animation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SnowfallComponent } from './snowfall/snowfall.component';
import { FooterComponent } from './footer/footer.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    AppComponent,
    MultiLanguageComponent,
    TetrixComponent,
    AccueilComponent,
    AnimationComponent,
    NavbarComponent,
    SnowfallComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    TranslateModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
