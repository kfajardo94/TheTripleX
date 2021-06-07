import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {VideoComponent} from './views/video/video.component';
import {CategoriasComponent} from './views/categorias/categorias.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'categorias', component: CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
