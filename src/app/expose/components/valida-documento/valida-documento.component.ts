import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-valida-documento',
  templateUrl: './valida-documento.component.html',
  styleUrls: ['./valida-documento.component.scss']
})
export class ValidaDocumentoComponent implements OnInit {
  maxlen:number = 0;  
  numDoc:string = "";
  apePat:string = "";
  apeMat:string = "";
  nombres:string = "";
  telefono:string = "";
  email:string = "";
  domicilio:string = "";
  selectedValue:string = "DNI";
  defaultValue:string="DNI";
  mostrarValidar:boolean = false;
  
  opciones:any[] = [
    {id: 'DNI', label: 'DNI', maxlen:'8', tipo:'N'},
    {id: 'CE', label: 'Carnet de extranjería', maxlen:'12', tipo:'X'}
  ];


  validarIdentidad(){
    this.mostrarValidar = false;
    this.domicilio = "AV. SANTA FÉ 123 LA VICTORIA  ";
  }

  onDropdownChange(event:any) {
    this.numDoc = "";
    this.apeMat = "";
    this.apePat = "";
    this.nombres = "";
    this.domicilio = "";
    this.telefono = "";
    this.email = "";
  
    let encontrado = this.opciones.find(x => x.id == event.value);
    
    this.maxlen = encontrado.maxlen;
    if (event.value == 'DNI') {
      this.mostrarValidar = true;
    }
    else {
      this.mostrarValidar = false;      
    }
  }


  constructor() { }

  ngOnInit(): void {
    this.mostrarValidar = true;
    let encontrado = this.opciones.find(x => x.id == 'DNI');    
    this.maxlen = encontrado.maxlen;
  }

}
