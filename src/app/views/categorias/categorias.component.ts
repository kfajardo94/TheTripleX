import { Component, OnInit } from '@angular/core';
import {Categorias} from '../../bo/Categorias';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private modalService: NgbModal,
              private service: Services) {
    this.categorias = [];
    this.type = '';
    this.mensaje = '';
    this.modo = 0;
    this.deshabilitarBotones = false;
    this.mostrarMensaje = false;
    this.form = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

    this.service.getAllItemsFromEntity('categoria').subscribe( res => {
      this.categorias = res;
    }, error1 => {
      console.error('Error al consumir Get All');
    });

  }

  crear(content: any): void {
    this.modo = 1;
    this.deshabilitarBotones = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
    this.form = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', Validators.required)
    });
  }

  guardar(): void {

    if (this.form && this.form.valid){
      const obj = this.llenarObjeto(this.form);
      this.service.saveEntity('categoria', obj).subscribe( res => {
        this.type = 'success';
        this.mensaje = 'Registro creado exitosamente';
        this.deshabilitarBotones = true;
        this.mostrarMensaje = true;
        setTimeout(() => {
          this.modalService.dismissAll();
          this.mostrarMensaje = false;
        } , 1000);
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
  }

  llenarObjeto(form: any): any{

    const obj = {
      id: form.controls.id.value.trim(),
      nombre: form.controls.nombre.value.trim()
    }
    return obj;
  }

  limpiarControls(campo: any): any{
    this.form.controls[campo].setValue(this.form.controls[campo].value.trim());
  }

}
