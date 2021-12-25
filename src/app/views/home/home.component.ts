import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Videos} from '../../bo/Videos';
import {NgbPagination, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {Services} from '../../services/Services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./css/home.component.0-600.scss',
              './css/home.component.601-1000.scss',
              './css/home.component.1001-1440.scss',
              './css/home.component.1441-2000.scss',
              './css/home.component.2001.scss']
})
export class HomeComponent implements OnInit{

  videos: Videos[];
  valorVideo: string;
  url: string;
  pagination: NgbPagination;
  videos$: Observable<Videos[]>;

  constructor(private router: Router, private service: Services) {
    this.videos = [];
    this.valorVideo = '';
    this.url = this.router.url;
    this.pagination = new NgbPagination(new NgbPaginationConfig());
    this.pagination.page = 0;
    this.pagination.pageSize = 24;
    this.pagination.maxSize = 20;
    this.videos$ = this.service.getVideos$();

  }

  ngOnInit(): void {

    this.getValuesByPage('', this.service.filtroHeader, this.pagination.page, this.pagination.pageSize);

    this.videos$.subscribe(
      videos => {
        this.videos = videos;
        this.pagination.page = 0;
        this.pagination.pageSize = 24;
      }
    );

  }

  getValuesByPage(idValue: any, descripcionValue: string, pageValue: any, sizeValue: any): void{
    this.pagination.page = pageValue + 1;
    const obj = {
      video: {id: idValue, descripcion: descripcionValue},
      page: pageValue,
      size: sizeValue
    };

    this.service.getFromEntityByPage('video', obj).subscribe( res => {
      this.videos = res.content;
      this.pagination.collectionSize = res  .totalElements;
    }, error1 => {
      console.error('Error al consumir Get All');
    });
  }

  changePage(event: any): void {
    this.pagination.page = event;
    this.getValuesByPage('',
      this.service.filtroHeader.trim(), this.pagination.page, this.pagination.pageSize);
  }

  enviarSrc(src: string): void {
    this.service.srcVideo = src;
  }
}
