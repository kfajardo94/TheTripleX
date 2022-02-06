import {Component, OnInit} from '@angular/core';
import {Videos} from '../../bo/Videos';
import {ActivatedRoute} from '@angular/router';
import {Services} from '../../services/Services';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video: Videos;
  sourceVideo: SafeResourceUrl;
  idVideo = 0;

  constructor(private route: ActivatedRoute, private service: Services,
              private sanitizer: DomSanitizer) {
    this.sourceVideo = '';
    this.idVideo = Number(this.route.snapshot.queryParamMap.get('id'));
    this.video = new Videos(0, '', '', '', '');
  }

  ngOnInit(): void {
    if (!this.sourceVideo) {
      this.service.getByIdFromEntity('video', this.idVideo).subscribe( res => {
        this.video = (res as Videos);
        if (this.sanitizer.bypassSecurityTrustResourceUrl(this.video.srcVideo)) {
          this.sourceVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.srcVideo);
        }
        this.service.setTitle$(this.video.descripcion);
        }, error => {
          console.error('Error al consumir get by id');
        }
      );
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }

}
