export class Miniaturas {
  id: number;
  descripcion: string;
  categoriaId: number;
  srcImagen: string;

  constructor(id: number, descripcion: string, categoriaId: number, srcImagen: string) {
    this.id = id;
    this.descripcion = descripcion;
    this.categoriaId = categoriaId;
    this.srcImagen = srcImagen;
  }

}
