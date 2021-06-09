export class ComentariosVideos{
  id: number;
  descripcion: string;
  videoId: number;
  nombreUsuario: string;

  constructor(id: number, descripcion: string, videoId: number, nombreUsuario: string) {
    this.id = id;
    this.descripcion = descripcion;
    this.videoId = videoId;
    this.nombreUsuario = nombreUsuario;
  }

}
