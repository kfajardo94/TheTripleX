import { Component, OnInit } from '@angular/core';
import {Miniatura} from '../../bo/Miniatura';
import {Video} from '../../bo/Video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array: Miniatura[];
  arrayVideo: Video[];

  constructor() {
    this.array = [];
    this.arrayVideo = [];

  }



  ngOnInit(): void {

    this.array = [...this.array, new Miniatura(1, 'Camila 1', 1, 'https://img-l3.xvideos-cdn.com/videos/thumbs169poster/42/a5/cd/42a5cdd9b69df7ad69ab33facaf47b33/42a5cdd9b69df7ad69ab33facaf47b33.26.jpg')];
    this.array = [...this.array, new Miniatura(2, 'Camila 1', 1, 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/c2/40/3cc240d8e993159c428c37424beedeee/3cc240d8e993159c428c37424beedeee.12.jpg')];
    this.array = [...this.array, new Miniatura(3, 'Camila 1', 1, 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/5c/21/9b/5c219b503e39e70b7bf1880bd9529754/5c219b503e39e70b7bf1880bd9529754.5.jpg')];
    this.array = [...this.array, new Miniatura(4, 'Camila 1', 1, 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/2e/f7/27/2ef727330799ad95781ea178195040b6/2ef727330799ad95781ea178195040b6.29.jpg')];


    this.arrayVideo = [...this.arrayVideo, new Video(1, 'Camila 1', 1, 'https://video-hw.xvideos-cdn.com/videos/mp4/4/2/a/xvideos.com_42a5cdd9b69df7ad69ab33facaf47b33.mp4?e=1622413672&ri=1024&rs=85&h=84992577b78ba7638dc4fc39d8240df9', 'https://img-l3.xvideos-cdn.com/videos/thumbs169poster/42/a5/cd/42a5cdd9b69df7ad69ab33facaf47b33/42a5cdd9b69df7ad69ab33facaf47b33.26.jpg')];
    this.arrayVideo = [...this.arrayVideo, new Video(2, 'Camila 1', 1, 'https://video-hw.xvideos-cdn.com/videos/mp4/3/c/c/xvideos.com_3cc240d8e993159c428c37424beedeee.mp4?e=1622413715&ri=1024&rs=85&h=a5d2cfd647a1a79958dd83826671f368', 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/c2/40/3cc240d8e993159c428c37424beedeee/3cc240d8e993159c428c37424beedeee.12.jpg')];
    this.arrayVideo = [...this.arrayVideo, new Video(3, 'Camila 1', 1, 'https://video-hw.xvideos-cdn.com/videos/mp4/5/c/2/xvideos.com_5c219b503e39e70b7bf1880bd9529754.mp4?e=1622413820&ri=1024&rs=85&h=2057748374f64e29a93e67515b66d28b', 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/5c/21/9b/5c219b503e39e70b7bf1880bd9529754/5c219b503e39e70b7bf1880bd9529754.5.jpg')];
    this.arrayVideo = [...this.arrayVideo, new Video(4, 'Camila 1', 1, 'https://cdn77-vid.xvideos-cdn.com/f6PTsx28sAGvjavPP8NeVA==,1622422306/videos/mp4/2/e/f/xvideos.com_2ef727330799ad95781ea178195040b6.mp4?ui=MTkwLjE0OC41Mi4xODktL3ZpZGVvMzc2MTQxMTUvZGF1Z2h0ZXJzd2FwXy1f', 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/2e/f7/27/2ef727330799ad95781ea178195040b6/2ef727330799ad95781ea178195040b6.29.jpg')];


  }

}
