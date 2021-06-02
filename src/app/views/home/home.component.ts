import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {Miniatura} from '../../bo/Miniatura';
import {Video} from '../../bo/Video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  array: Miniatura[];
  arrayVideo: Video[];
  valorVideo: string;

  constructor() {
    this.array = [];
    this.arrayVideo = [];
    this.valorVideo = '';

  }



  ngOnInit(): void {

    this.array = [...this.array, new Miniatura(1, 'Camila 1', 1, 'https://img-l3.xvideos-cdn.com/videos/thumbs169poster/42/a5/cd/42a5cdd9b69df7ad69ab33facaf47b33/42a5cdd9b69df7ad69ab33facaf47b33.26.jpg')];
    this.array = [...this.array, new Miniatura(2, 'Camila 1', 1, 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/c2/40/3cc240d8e993159c428c37424beedeee/3cc240d8e993159c428c37424beedeee.12.jpg')];
    this.array = [...this.array, new Miniatura(3, 'Camila 1', 1, 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/5c/21/9b/5c219b503e39e70b7bf1880bd9529754/5c219b503e39e70b7bf1880bd9529754.5.jpg')];
    this.array = [...this.array, new Miniatura(4, 'Camila 1', 1, 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/2e/f7/27/2ef727330799ad95781ea178195040b6/2ef727330799ad95781ea178195040b6.29.jpg')];


    this.arrayVideo = [...this.arrayVideo, new Video(1, 'Camila 1', 1,
      'https://www.xvideos.com/embedframe/63188251',
      'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/c2/40/3cc240d8e993159c428c37424beedeee/3cc240d8e993159c428c37424beedeee.12.jpg')];
    this.arrayVideo = [...this.arrayVideo, new Video(2, 'Camila 1', 1,
      'https://www.xvideos.com/embedframe/23569256',
      'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/c2/40/3cc240d8e993159c428c37424beedeee/3cc240d8e993159c428c37424beedeee.12.jpg')];
    this.arrayVideo = [...this.arrayVideo, new Video(3, 'Camila 1', 1,
      'https://www.xvideos.com/embedframe/62021115',
      'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/2e/f7/27/2ef727330799ad95781ea178195040b6/2ef727330799ad95781ea178195040b6.29.jpg')];
    this.arrayVideo = [...this.arrayVideo, new Video(4, 'Camila 1', 1,
      'https://www.xvideos.com/embedframe/37614115',
      'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/2e/f7/27/2ef727330799ad95781ea178195040b6/2ef727330799ad95781ea178195040b6.29.jpg')];
  }

}
