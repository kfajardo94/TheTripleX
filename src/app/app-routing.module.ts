import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {CategoriasComponent} from './views/categorias/categorias.component';
import {CrudVideosComponent} from './views/crud-videos/crud-videos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'videos', component: CrudVideosComponent},
  {path: 'categorias', component: CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
