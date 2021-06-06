import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {Videos} from '../../bo/Videos';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  arrayVideo: Videos[];
  sourceVideo: string;
  idVideo = 0;

  constructor(private route: ActivatedRoute) {
    this.arrayVideo = [];
    this.sourceVideo = '';
    this.idVideo = Number(this.route.snapshot.queryParamMap.get('id'));
  }

  ngOnInit(): void {
    // this.arrayVideo = [...this.arrayVideo, new Videos(1, 'Camila 1', 1,
    //   'https://www.xvideos.com/embedframe/63188251',
    //   'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/c2/40/3cc240d8e993159c428c37424beedeee/3cc240d8e993159c428c37424beedeee.12.jpg')];
    // this.arrayVideo = [...this.arrayVideo, new Videos(2, 'Camila 1', 1,
    //   'https://www.xvideos.com/embedframe/23569256',
    //   'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/c2/40/3cc240d8e993159c428c37424beedeee/3cc240d8e993159c428c37424beedeee.12.jpg')];
    // this.arrayVideo = [...this.arrayVideo, new Videos(3, 'Camila 1', 1,
    //   'https://www.xvideos.com/embedframe/62021115',
    //   'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/2e/f7/27/2ef727330799ad95781ea178195040b6/2ef727330799ad95781ea178195040b6.29.jpg')];
    // this.arrayVideo = [...this.arrayVideo, new Videos(4, 'Camila 1', 1,
    //   'https://www.xvideos.com/embedframe/37614115',
    //   'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/2e/f7/27/2ef727330799ad95781ea178195040b6/2ef727330799ad95781ea178195040b6.29.jpg')];

    const valor = this.arrayVideo.find(x => x.id === this.idVideo);
    if (valor) {
      this.sourceVideo = valor.srcVideo;
    }
  }

}
