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
  domicilio:string = "";
  tipoDoc:string = "DNI";
  mostrarValidar:boolean = false;
  
  opciones:any[] = [
    {id: 'DNI', nombre: 'DNI', maxlen:'8', tipo:'N'},
    {id: 'CE', nombre: 'Carnet de extranjería', maxlen:'12', tipo:'X'}
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
  
    this.maxlen = event.value.maxlen;
    if (event.value.id == 'DNI') {
      this.mostrarValidar = true;
    }
    else {
      this.mostrarValidar = false;      
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
