export class Miniatura {
  id: number;
  nombre: string;
  categoriaId: number;
  source: string;

  constructor(id: number, nombre: string, categoriaId: number, source: string) {
    this.id = id;
    this.nombre = nombre;
    this.categoriaId = categoriaId;
    this.source = source;
  }
}
