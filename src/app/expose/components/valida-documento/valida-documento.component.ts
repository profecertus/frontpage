import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "../local-storage.service";
import { MessageService, Message } from "primeng/api";

@Component({
  selector: 'app-valida-documento',
  templateUrl: './valida-documento.component.html',
  styleUrls: ['./valida-documento.component.scss'],
  providers: [MessageService]
})
export class ValidaDocumentoComponent implements OnInit {
  maxlen:number = 0;
  numDoc:string = "";
  twoDecimal: RegExp = /^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/;
  apePat:string = "";
  apeMat:string = "";
  nombres:string = "";
  telefono:string = "";
  domicilio:string = "";
  selectedValue:string = "DNI";
  defaultValue:string="DNI";
  mostrarValidar:boolean = false;
  bloquear:boolean = false;
  ocultarBoton:boolean = true;
  digitovalidador:number = 0;
  blockChars: RegExp = /[a-zA-Z\s<>]+/;


  opciones:any[] = [
    {id: 'DNI', label: 'DNI', maxlen:'8'},
    {id: 'CE', label: 'Carnet de extranjería', maxlen:'9'}
  ];

  ngOngOnInit(): void {
    this.localStorageService.eliminarItem("persona");
    this.localStorageService.eliminarItem("datosGenerales")
  }

  validarIdentidad():void{
    this.bloquear = true;
    this.domicilio = "AV. SANTA FÉ 123 LA VICTORIA  ";
    this.ocultarBoton = false;

    let datosGenerales = {
      "tipoDocumento":this.selectedValue,
      "numeroDocumento": this.numDoc,
      "apePaterno": this.apePat,
      "apeMaterno": this.apeMat,
      "nombres":this.nombres,
      "digitoValidador":this.digitovalidador
    }
    this.localStorageService.guardarItem("datosGenerales", datosGenerales);

    this.messageService.add({
      severity: 'success',
      summary: 'Validado Correctamente',
      detail: 'Se valido los datos de la persona'
    });

  }



  onDropdownChange(event:any) {
    this.numDoc = "";
    this.apeMat = "";
    this.apePat = "";
    this.nombres = "";
    this.domicilio = "";
    this.telefono = "";

    let encontrado = this.opciones.find(x => x.id == event.value);

    this.maxlen = encontrado.maxlen;
    if (event.value == 'DNI') {
      this.mostrarValidar = true;
      this.bloquear = false;
      this.ocultarBoton = true;
    }
    else {
      this.mostrarValidar = false;
      this.bloquear = false;
      this.ocultarBoton = false;
    }
  }


  constructor(private localStorageService:LocalStorageService, private messageService:MessageService ) { }

  ngOnInit(): void {
    this.mostrarValidar = true;
    let encontrado = this.opciones.find(x => x.id == 'DNI');
    this.maxlen = encontrado.maxlen;
    let reclamo = this.localStorageService.obtenerItem("reclamo");
    if (reclamo == null)
      return;
    if(reclamo.datosGenerales.tipoDocumento == 'DNI'){
      this.numDoc = reclamo.datosGenerales.numeroDocumento;
      this.selectedValue = reclamo.datosGenerales.tipoDocumento;
      this.digitovalidador = reclamo.datosGenerales.digitovalidador;
      this.apePat = reclamo.datosGenerales.apePaterno;
      this.apeMat = reclamo.datosGenerales.apeMaterno;
      this.nombres = reclamo.datosGenerales.nombres;
      this.domicilio = reclamo.domicilio;
      this.telefono = reclamo.telefono;
      this.mostrarValidar = false;
      this.bloquear = true;
      this.ocultarBoton = false;
    }


  }

}
