import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Miniaturas} from '../../bo/Miniaturas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  array: Miniaturas[];
  valorVideo: string;
  url: string;

  constructor(private router: Router) {
    this.array = [];
    this.valorVideo = '';
    this.url = this.router.url;

  }

  ngOnInit(): void {

    this.array = [...this.array, new Miniaturas(1, 'Duro con la amiga en frente', 'https://img-l3.xvideos-cdn.com/videos/thumbs169poster/42/a5/cd/42a5cdd9b69df7ad69ab33facaf47b33/42a5cdd9b69df7ad69ab33facaf47b33.26.jpg')];
    this.array = [...this.array, new Miniaturas(2, 'Primecups Marina Visconti lays down for a good dicking', 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/c2/40/3cc240d8e993159c428c37424beedeee/3cc240d8e993159c428c37424beedeee.12.jpg')];
    this.array = [...this.array, new Miniaturas(3, 'Horny Tenant Requires Building Manager\'s Services', 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/5c/21/9b/5c219b503e39e70b7bf1880bd9529754/5c219b503e39e70b7bf1880bd9529754.5.jpg')];
    this.array = [...this.array, new Miniaturas(4, 'DaughterSwap - Horny Teen Besties (Kitty Carrera) (Sofie Reyez) Fuck Eachothers Dads', 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/2e/f7/27/2ef727330799ad95781ea178195040b6/2ef727330799ad95781ea178195040b6.29.jpg')];

  }

  verVideo(idValue: any): void {
    this.router.navigate([this.url + 'video'], {queryParams: {id: idValue}});
  }

}
