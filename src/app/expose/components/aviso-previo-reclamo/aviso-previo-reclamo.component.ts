import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../local-storage.service";

@Component({
  selector: 'app-aviso-previo-reclamo',
  templateUrl: './aviso-previo-reclamo.component.html',
  styleUrls: ['./aviso-previo-reclamo.component.scss']
})
export class AvisoPrevioReclamoComponent implements OnInit {
  tipoDocumento:string = '';
  numeroDocumento:string = '';
  nombres:string = '';
  apePaterno:string = '';
  apeMaterno:string = '';
  digitoValidador:string = '';
  domicilio:string = '';
  email:string = '';
  empresa:string = '';
  motivoSeleccionado = '';
  ruc:string='';
  telefono:string='';
  trataron:string= '';
  nombreCompleto:string = '';
  constructor(private localStorageService:LocalStorageService) {

  }

  ngOnInit(): void {
    let reclamo = this.localStorageService.obtenerItem("reclamo");
    this.tipoDocumento = reclamo.datosGenerales.tipoDocumento;
    this.numeroDocumento = reclamo.datosGenerales.numeroDocumento;
    this.apeMaterno = reclamo.datosGenerales.apeMaterno;
    this.apePaterno = reclamo.datosGenerales.apePaterno;
    this.nombres = reclamo.datosGenerales.nombres;
    this.digitoValidador = reclamo.datosGenerales.digitoValidador;
    this.domicilio = reclamo.domicilio;
    this.email = reclamo.email;
    this.empresa = reclamo.empresa;
    this.motivoSeleccionado = reclamo.motivoSeleccionado;
    this.ruc = reclamo.ruc;
    this.telefono = reclamo.telefono;
    this.trataron = reclamo.trataron;
    this.nombreCompleto = this.nombres + ' ' + this.apePaterno + ' ' + this.apeMaterno;

  }

}
