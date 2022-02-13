import {Component, OnInit} from '@angular/core';
import {Videos} from '../../bo/Videos';
import {ActivatedRoute} from '@angular/router';
import {Services} from '../../services/Services';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./css/video.component.scss',
              './css/video.component.0-600.scss']
})
export class VideoComponent implements OnInit {
  video: Videos;
  sourceVideo: SafeResourceUrl;
  idVideo = 0;
  descripcion: string;
  comentario: string;
  longitud: string;

  constructor(private route: ActivatedRoute, private service: Services,
              private sanitizer: DomSanitizer) {
    this.sourceVideo = '';
    this.idVideo = Number(this.route.snapshot.queryParamMap.get('id'));
    this.video = new Videos(0, '', '', '', '');
    this.descripcion = '';
    this.comentario = '';
    this.longitud = '';
  }

  ngOnInit(): void {
    if (!this.sourceVideo) {
      this.service.getByIdFromEntity('video', this.idVideo).subscribe( res => {
        this.video = (res as Videos);
        if (this.sanitizer.bypassSecurityTrustResourceUrl(this.video.srcVideo)) {
          this.sourceVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.srcVideo);
          this.descripcion = this.video.descripcion;
        }
        this.service.setTitle$(this.video.descripcion);
        }, error => {
          console.error('Error al consumir get by id');
        }
      );
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const obj =  document.getElementById('comentario') as HTMLTextAreaElement;

    this.comentario = '';
    this.longitud = String(obj.maxLength);

  }

  playPause(event: any): void {

    console.log('event: ', event);
  }


}
