import { Component, OnInit } from '@angular/core';
import {Categorias} from '../../bo/Categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Categorias[];

  constructor() {
    this.categorias = [];
  }

  ngOnInit(): void {

    this.categorias = [...this.categorias, new Categorias(1, 'Categoria 1')];
    this.categorias = [...this.categorias, new Categorias(2, 'Categoria 2')];
    this.categorias = [...this.categorias, new Categorias(3, 'Categoria 3')];
    this.categorias = [...this.categorias, new Categorias(4, 'Categoria 4')];
    this.categorias = [...this.categorias, new Categorias(5, 'Categoria 5')];
    this.categorias = [...this.categorias, new Categorias(6, 'Categoria 6')];
    this.categorias = [...this.categorias, new Categorias(7, 'Categoria 7')];
    this.categorias = [...this.categorias, new Categorias(8, 'Categoria 8')];

  }

}
