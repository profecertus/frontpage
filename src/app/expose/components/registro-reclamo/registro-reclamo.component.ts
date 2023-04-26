import { Component, OnInit } from '@angular/core';
import {Situacion} from "../../model/situacion.interface";
import {Router} from "@angular/router";
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-registro-reclamo',
  templateUrl: './registro-reclamo.component.html',
  styleUrls: ['./registro-reclamo.component.scss']
})

export class RegistroReclamoComponent implements OnInit {
  situaciones: Situacion[] | any;
  situacioSelect: Situacion | any;
  selectedOption:any;
  esEntidad:boolean = false;
  esVisible:boolean = false;
  entidad:string = "";  
  ruc:string = "";


  date: Date[] | any;


  param:string = '';
  param1:string = '';
  text:string = '';
  paso:number = 1;
  selectedCategories: any[] = [];
  
  tipoenvioSelected: any;
  tipoenvio: any[] = [];
  constructor(private router: Router) {

  }


  ngOnInit(): void {
    this.situaciones = [
      { id: '1', nombre: 'En una sede física' },
      { id: '2', nombre: 'En el Portal Institucional' }
    ];

    this.situacioSelect = this.situaciones[0];
    
  }
 

  obtenerEmpresa(event:any){
    this.entidad = "EMPRESA LOS JARDINES DEL MAR S.A.";
  }

  clickSiguiente() {
    if(this.paso == 3){
      this.router.navigate(['/reclamo/codigo']);

      return;
    }
    this.paso++;
  }

  clickAnterior() {
    if (this.paso == 1) return;
    this.paso--;
  }
}
