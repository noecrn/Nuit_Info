import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {interval} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  hadouken: boolean = false;
  selectLanguage: string = "en"
  not_to_fast: boolean = true;
  hadouken_is_on: boolean = false;
  key = "";
  list: string[] = [];
  consommation_per_s = 0.2 / 60 / 60;
  watt_total = 0;

  metre_fait_avec_une_voiture = 0;
  nbr_arbre_couper = 0;

  intervalId: any = 0;

  ngOnInit() {
  }

  loop_compute() {
  }

  notDisplayHadoken() {
    this.hadouken = false;
    this.hadouken_is_on = false;
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.not_to_fast) {
      this.not_to_fast = false;
      const cheatCode = [
        "ArrowUp", "ArrowUp",
        "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowLeft",
        "ArrowRight", "ArrowRight",
        "b", "a",
      ]
      var index: number = 0;
      var Hadouken_is_done: boolean = false;
      this.list.push(event.key);
      if (this.list.length >= 10) {
        var i: number = 0;
        for (const element of this.list) {
          if (i >= this.list.length - 10) {
            if (this.list[i] === cheatCode[index]) {
              index += 1;
            }
          }
          i += 1;
        }
        console.log(this.list);
        if (index === 10) {
          Hadouken_is_done = true;
        }
        if (Hadouken_is_done) {
          if (!this.hadouken_is_on) {
            this.hadouken = true;
            this.hadouken_is_on = true;
            setTimeout(() => this.notDisplayHadoken(), 3000);
          }
        }
      }
      setTimeout(() => {
      }, 500);
      this.not_to_fast = true;
    }
  }
  title = 'nuitInfo';
}
