import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-valida-documento',
  templateUrl: './valida-documento.component.html',
  styleUrls: ['./valida-documento.component.scss']
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


  validarIdentidad(){
    this.bloquear = true;
    this.domicilio = "AV. SANTA FÉ 123 LA VICTORIA  ";
    this.ocultarBoton = false;
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


  constructor() { }

  ngOnInit(): void {
    this.mostrarValidar = true;
    let encontrado = this.opciones.find(x => x.id == 'DNI');    
    this.maxlen = encontrado.maxlen;
  }

}
