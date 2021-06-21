import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Services} from '../../services/Services';
import {NgbPagination, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {Videos} from '../../bo/Videos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;
  url: string;
  pagination: NgbPagination;
  filtroBusqueda: string;


  constructor(private router: Router,
              private services: Services) {
    this.title = '';
    this.url = this.router.url;
    this.pagination = new NgbPagination(new NgbPaginationConfig());
    this.pagination.page = 0;
    this.pagination.pageSize = 24;
    this.filtroBusqueda = '';
  }

  ngOnInit(): void {

    if (!this.title) {
      this.title = 'Triple-X';
    }

  }

  home(): any {
    this.router.navigate(['']);
    this.filtroBusqueda = '';
    this.services.filtroHeader = this.filtroBusqueda;
    this.getValuesByPage('', '', this.pagination.page, this.pagination.pageSize);
  }

  viajarOpciones(opcion: string): void {
    this.router.navigate([this.url + opcion]);
  }

  filtrar(): void {
    this.services.filtroHeader = this.filtroBusqueda;
    this.getValuesByPage('', this.services.filtroHeader, this.pagination.page, this.pagination.pageSize);
  }

  getValuesByPage(idValue: any, descripcionValue: string, pageValue: any, sizeValue: any): void{
    const obj = {
      video: {id: idValue, descripcion: descripcionValue},
      page: pageValue,
      size: sizeValue
    };

    this.services.getFromEntityByPage('video', obj).subscribe( res => {
      this.services.agregarTodosVideos(res.content);
      this.pagination.collectionSize = res  .totalElements;
    }, error1 => {
      console.error('Error al consumir Get All');
    });
  }
}
