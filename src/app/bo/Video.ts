export class Video {
  id: number;
  nombre: string;
  categoriaId: number;
  sourceImage: string
  sourceVideo: string;

  constructor(id: number, nombre: string, categoriaId: number, sourceVideo: string, sourceImage: string) {
    this.id = id;
    this.nombre = nombre;
    this.categoriaId = categoriaId;
    this.sourceVideo = sourceVideo;
    this.sourceImage = sourceImage;
  }
}
