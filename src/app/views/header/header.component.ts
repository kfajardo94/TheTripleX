import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Services} from '../../services/Services';
import {NgbPagination, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./css/header.component.0-1100.scss',
              './css/header.component.1101-1440.scss',
              './css/header.component.1441-2000.scss',
              './css/header.component.2001.scss']
})
export class HeaderComponent implements OnInit {

  title: string;
  url: string;
  pagination: NgbPagination;
  filtroBusqueda: string;
  titleHeader$: Observable<string>;
  filtroHeader$: Observable<string>;


  constructor(private router: Router,
              private services: Services) {
    this.title = '';
    this.url = this.router.url;
    this.pagination = new NgbPagination(new NgbPaginationConfig());
    this.pagination.page = 0;
    this.pagination.pageSize = 24;
    this.filtroBusqueda = '';
    this.titleHeader$ = this.services.getTitle$();
    this.filtroHeader$ = this.services.getFiltroHeader$();
  }

  ngOnInit(): void {

    this.titleHeader$.subscribe( res => {
      this.title = res;
    });

    this.filtroHeader$.subscribe(res => {
      this.filtroBusqueda = res;
    });

  }

  home(): any {
    this.services.setFiltroHeader$('');
    this.viajarOpciones('');
    this.getValuesByPage('', '', this.pagination.page, this.pagination.pageSize);
  }

  viajarOpciones(opcion: string): void {
    this.router.navigate([this.url + opcion]);
  }

  filtrar(): void {
    this.filtroBusqueda = this.filtroBusqueda.trim();
    if (this.filtroBusqueda) {
      this.services.setFiltroHeader$(this.filtroBusqueda);
      this.getValuesByPage('', this.filtroBusqueda, this.pagination.page, this.pagination.pageSize);
      this.viajarOpciones('');
    }
  }

  filtroEnter(event: any): void{

    if (event['keyCode'] === 13) {
      this.filtrar();
    }
  }

  getValuesByPage(idValue: any, descripcionValue: string, pageValue: any, sizeValue: any): void{
    const obj = {
      video: {id: idValue, descripcion: descripcionValue},
      page: pageValue,
      size: sizeValue
    };

    this.services.getFromEntityByPage('video', obj).subscribe( res => {
      this.services.agregarTodosVideos(res.content);
      this.services.setCollectionSize$(res.totalElements);
    }, error1 => {
      console.error('Error al consumir Get All');
    });
  }

}
