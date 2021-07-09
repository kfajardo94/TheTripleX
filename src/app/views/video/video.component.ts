import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {Videos} from '../../bo/Videos';
import {ActivatedRoute, Router} from '@angular/router';
import {Services} from '../../services/Services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video: Videos;
  sourceVideo: string;
  idVideo = 0;

  constructor(private route: ActivatedRoute, private service: Services) {
    this.sourceVideo = '';
    this.idVideo = Number(this.route.snapshot.queryParamMap.get('id'));
    this.video = new Videos(0, '', '', '', '');
  }

  ngOnInit(): void {
    this.sourceVideo = this.service.srcVideo;
    if (!this.sourceVideo) {
      this.service.getByIdFromEntity('video', this.idVideo).subscribe( res => {
        this.video = (res as Videos);
        this.sourceVideo = this.video.srcVideo;
        }, error => {
          console.error('Error al consumir get by id');
        }
      );
    }
  }

}
