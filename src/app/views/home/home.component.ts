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
  filtroHeader: string;
  videos$: Observable<Videos[]>;
  collectionSize$: Observable<number>;
  filtroHeader$: Observable<string>;

  constructor(private router: Router, private service: Services) {
    this.videos = [];
    this.valorVideo = '';
    this.filtroHeader = '';
    this.url = this.router.url;
    this.pagination = new NgbPagination(new NgbPaginationConfig());
    this.pagination.page = 0;
    this.pagination.pageSize = 24;
    this.pagination.maxSize = 2;
    this.videos$ = this.service.getVideos$();
    this.collectionSize$ = this.service.getCollectionSize$();
    this.filtroHeader$ = this.service.getFiltroHeader$();

  }

  ngOnInit(): void {
    this.filtroHeader = '';

    this.filtroHeader$.subscribe( res => {
      this.filtroHeader = res.trim();
    });

    this.getValuesByPage('', this.filtroHeader, this.pagination.page, this.pagination.pageSize);

    this.videos$.subscribe(
      videos => {
        this.videos = videos;
        this.pagination.page = 0;
        this.pagination.pageSize = 24;
      }
    );

    this.collectionSize$.subscribe( res => {
      this.pagination.collectionSize = res;
    });

    this.service.setTitle$('Triple-X');

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

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
      this.filtroHeader.trim(), this.pagination.page, this.pagination.pageSize);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  enviar(idValue: any): void{
    this.router.navigate(['/video'], {queryParams: {id: idValue}});
    this.service.setFiltroHeader$('');
  }

}
