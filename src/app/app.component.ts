import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-triple-x';

  constructor(private translate: TranslateService){
    this.setAppLanguage();
  }

  setAppLanguage(): void {
    this.translate.setDefaultLang('es');
    this.translate.use(this.translate.getBrowserLang());
  }

}
