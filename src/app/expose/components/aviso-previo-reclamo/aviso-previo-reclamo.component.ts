import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../local-storage.service";
import {Time} from "@angular/common";

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
  motivoCabecera:string = '';
  ruc:string='';
  telefono:string='';
  trataron:string= '';
  nombreCompleto:string = '';
  tipoLugar:string='';
  lugar:string='';
  descripcion:string = '';
  fecha:Date | any;
  hora:Time | any;

  constructor(private localStorageService:LocalStorageService) {

  }

  ngOnInit(): void {
    let reclamo = this.localStorageService.obtenerItem("reclamo");
    if(reclamo == null)return;
    this.tipoDocumento = reclamo.datosGenerales.tipoDocumento;
    this.numeroDocumento = reclamo.datosGenerales.numeroDocumento;
    this.apeMaterno = reclamo.datosGenerales.apeMaterno;
    this.apePaterno = reclamo.datosGenerales.apePaterno;
    this.nombres = reclamo.datosGenerales.nombres;
    this.digitoValidador = reclamo.datosGenerales.digitoValidador;
    this.domicilio = reclamo.domicilio;
    this.email = reclamo.email;
    this.empresa = reclamo.empresa;
    this.motivoCabecera = reclamo.motivoSeleccionado.cabecera;
    this.motivoSeleccionado = reclamo.motivoSeleccionado.detalle;
    this.ruc = reclamo.ruc;
    this.telefono = reclamo.telefono == null || reclamo.telefono.trim() == ''?'NO DECLARADO':reclamo.telefono;
    this.trataron = reclamo.trataron == '1'?'SI':'NO';
    this.nombreCompleto = this.nombres + ' ' + this.apePaterno + ' ' + this.apeMaterno;
    this.tipoLugar = reclamo.tipoLugar.nombre;
    this.lugar = reclamo.lugarOcurrencia.nombre;
    this.fecha = reclamo.fechaOcurrencia;
    this.hora = reclamo.horaOcurrencia;
    this.descripcion = reclamo.descripcion;
  }

}
