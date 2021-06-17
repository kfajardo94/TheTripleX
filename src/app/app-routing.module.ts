import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {CategoriasComponent} from './views/categorias/categorias.component';
import {CrudVideosComponent} from './views/crud-videos/crud-videos.component';
import {VideoComponent} from './views/video/video.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'video', component: VideoComponent},
  {path: 'videos', component: CrudVideosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
