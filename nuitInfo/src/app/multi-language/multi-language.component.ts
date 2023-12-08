import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrl: './multi-language.component.scss'
})
export class MultiLanguageComponent implements OnInit {

  constructor(
    private router: Router,
    private appComponent: AppComponent,
private translateService:TranslateService,
  ) {}
  naviguate_to_accueil () {
    this.router.navigate(['/accueil'])
  }
lang:string ='';

  ngOnInit(): void {
    this.lang = this.appComponent.selectLanguage;

  }
  ChangeLang(lang:any){
    console.log("oui !");
    const selectedLanguage = lang.target.value;

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }

  ChangeLangEn(){
    console.log("oui !");
    const selectedLanguage = "en";

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }
  ChangeLangEs(){
    console.log("oui !");
    const selectedLanguage = "es";

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }
  ChangeLangFr(){
    console.log("oui !");
    const selectedLanguage = "fr";

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }
  ChangeLangIt(){
    console.log("oui !");
    const selectedLanguage = "it";

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }
  ChangeLangNl(){
    console.log("oui !");
    const selectedLanguage = "nl";

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }
  ChangeLangPr(){
    console.log("oui !");
    const selectedLanguage = "pr";

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }
  ChangeLangRu(){
    console.log("oui !");
    const selectedLanguage = "ru";

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }
  ChangeLangDe(){
    console.log("oui !");
    const selectedLanguage = "de";

    this.appComponent.selectLanguage = selectedLanguage;

    this.translateService.use(selectedLanguage);
  }

}
