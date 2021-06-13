import { Component, OnInit } from '@angular/core';
import {Categorias} from '../../bo/Categorias';
import {NgbModal, NgbPagination, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Services} from '../../services/Services';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Categorias[];
  form = new FormGroup({});
  type: string;
  mensaje: string;
  modo: number;
  deshabilitarBotones = false;
  mostrarMensaje = false;
  pagination: NgbPagination;
  filtroCerrado: boolean;

  constructor(private modalService: NgbModal,
              private service: Services) {
    this.categorias = [];
    this.type = '';
    this.mensaje = '';
    this.modo = 0;
    this.deshabilitarBotones = false;
    this.mostrarMensaje = false;
    this.pagination = new NgbPagination(new NgbPaginationConfig());
    this.pagination.page = 0;
    this.pagination.pageSize = 10;
    this.pagination.maxSize = 10;
    this.form = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', Validators.required)
    });
    this.filtroCerrado = true;
  }

  ngOnInit(): void {
    this.getValuesByPage('', '', this.pagination.page, this.pagination.pageSize);
  }

  modal(content: any, modo: number, item: any): void {
    this.modo = modo;
    this.deshabilitarBotones = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      }, (reason) => {
      }
    );

    if (this.modo === 1) {
      this.form = new FormGroup({
        id: new FormControl(''),
        nombre: new FormControl('', Validators.required)
      });
    } else if (this.modo === 2) {
      this.form = new FormGroup({
        id: new FormControl({value: item.id, disabled: true}),
        nombre: new FormControl(item.nombre, Validators.required)
      });
    } else if (this.modo === 3) {
      this.form = new FormGroup({
        id: new FormControl({value: item.id, disabled: true}),
        nombre: new FormControl({value: item.nombre, disabled: true})
      });
    }
  }

  modalEliminar(contentEliminar: any, item: any): void {
    this.modalService.open(contentEliminar, { size: 'sm' });
    this.deshabilitarBotones = false;
    this.form = new FormGroup({
      id: new FormControl({value: item.id, disabled: true}),
      nombre: new FormControl({value: item.nombre, disabled: true})
    });
  }

  guardar(): void {
    if (this.modo === 1){
      if (this.form && this.form.valid){
        const obj = this.llenarObjeto(this.form);
        this.service.saveEntity('categoria', obj).subscribe( res => {
          this.type = 'success';
          this.mensaje = 'Registro creado';
          this.deshabilitarBotones = true;
          this.mostrarMensaje = true;
          setTimeout(() => {
            this.modalService.dismissAll();
            this.mostrarMensaje = false;
          } , 1000);
          this.getValuesByPage('', '', 0, this.pagination.pageSize);
        }, error1 => {
          this.type = 'danger';
          this.mensaje = 'Ha ocurrido un error al insertar los datos';
          this.mostrarMensaje = true;
          setTimeout(() => {
            this.mostrarMensaje = false;
          } , 1500);
          console.error('Error al consumir Post');
        });
      }
    } else if (this.modo === 2){
      if (this.form && this.form.valid){
        const obj = this.llenarObjeto(this.form);
        this.service.editEntity('categoria', obj).subscribe( res => {
          this.type = 'success';
          this.mensaje = 'Registro modificado';
          this.deshabilitarBotones = true;
          this.mostrarMensaje = true;
          setTimeout(() => {
            this.modalService.dismissAll();
            this.mostrarMensaje = false;
          } , 1000);
          this.getValuesByPage('', '', 0, this.pagination.pageSize);
        }, error1 => {
          this.type = 'danger';
          this.mensaje = 'Ha ocurrido un error al actualizar los datos';
          this.mostrarMensaje = true;
          setTimeout(() => {
            this.mostrarMensaje = false;
          } , 1500);
          console.error('Error al consumir Post');
        });
      }
    }
  }

  eliminar(): void {
    this.service.deleteEntity('categoria', this.form.controls.id.value).subscribe(res => {
      this.type = 'success';
      this.mensaje = 'Registro eliminado';
      this.deshabilitarBotones = true;
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.modalService.dismissAll();
        this.mostrarMensaje = false;
      } , 1000);
      this.getValuesByPage('', '', 0, this.pagination.pageSize);
    }, error => {
      this.type = 'danger';
      this.mensaje = 'Ha ocurrido un error al eliminar el registro';
      this.mostrarMensaje = true;
      setTimeout(() => {
        this.mostrarMensaje = false;
      } , 1500);
      console.error('Error al consumir delete');
    });
  }

  llenarObjeto(form: any): any{
    console.log('form.controls.id.value: ', this.form.controls.id.value);
    const obj = {
      id: form.controls.id.value.toString().trim(),
      nombre: form.controls.nombre.value.trim()
    };

    return obj;
  }

  limpiarControls(campo: any): any{
    this.form.controls[campo].setValue(this.form.controls[campo].value.trim());
  }

  getValuesByPage(idValue: any, nombreValue: string, pageValue: any, sizeValue: any): void{
    this.pagination.page = pageValue + 1;
    const obj = {
      categoria: {id: idValue, nombre: nombreValue},
      page: pageValue,
      size: sizeValue
    };

    this.service.getFromEntityByPage('categoria', obj).subscribe( res => {
      this.categorias = res.content;
      this.pagination.collectionSize = res  .totalElements;
    }, error1 => {
      console.error('Error al consumir Get All');
    });
  }

  changePage(event: any): void {
    this.pagination.page = event;
    this.getValuesByPage('', '', this.pagination.page, this.pagination.pageSize);
  }

  changeSize(size: any): void {
    this.pagination.pageSize = size;
    this.getValuesByPage(null, '', 0, this.pagination.pageSize);
  }

}
