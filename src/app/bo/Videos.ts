export class Videos {
  id: number;
  descripcion: string;
  srcImagen: string;
  srcVideo: string;
  fechaCreacion: string;

  constructor(id: number, descripcion: string, srcImagen: string, srcVideo: string, fechaCreacion: string) {
    this.id = id;
    this.descripcion = descripcion;
    this.srcImagen = srcImagen;
    this.srcVideo = srcVideo;
    this.fechaCreacion = fechaCreacion;
  }
}
