export class ComentariosVideos{
  id: number;
  description: string;
  videoId: number;
  nombreUsuario: string;

  constructor(id: number, description: string, videoId: number, nombreUsuario: string) {
    this.id = id;
    this.description = description;
    this.videoId = videoId;
    this.nombreUsuario = nombreUsuario;
  }

}
