import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from './views/footer/footer.component';
import {HomeComponent} from './views/home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SafePipeModule} from 'safe-pipe';
import {VideoComponent} from './views/video/video.component';
import {CategoriasComponent} from './views/categorias/categorias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CrudVideosComponent } from './views/crud-videos/crud-videos.component';
import {PickerModule} from '@ctrl/ngx-emoji-mart';

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    VideoComponent,
    CategoriasComponent,
    CrudVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    SafePipeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
