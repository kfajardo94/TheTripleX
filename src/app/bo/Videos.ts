export class Videos {
  id: number;
  srcVideo: string;
  miniaturaId: number;

  constructor(id: number, srcVideo: string, miniaturaId: number) {
    this.id = id;
    this.srcVideo = srcVideo;
    this.miniaturaId = miniaturaId;
  }
  
}
