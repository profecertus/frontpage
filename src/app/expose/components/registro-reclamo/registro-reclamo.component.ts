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
  motivos: any[] = [];
  situacioSelect: Situacion | any;
  selectedOption:any;
  esEntidad:boolean = false;
  esVisible:boolean = false;
  entidad:string = "";  
  ruc:string = "";
  visible:boolean = false;
  siguiente:boolean = true;
  verBotonCorreo:boolean = true;
  numeroCorreo:string = "";
  email:string = "";
  rucDeshabilitado:boolean = false;
  repitaEmail:string = "";
  paso2Seleccionado:string = "pi pi-map-marker text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
  paso3Seleccionado:string = "pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
  motivoSeleccionado:string = "";

  date: Date[] | any;


  param:string = '';
  param1:string = '';
  text:string = '';
  paso:number = 1;
  stateOptions: any[] = [{label: 'SI', value: '1'}, {label: 'NO', value: '0'}];
  selectedCategories: any[] = [];
  edificios: any[] = [];
  edifSelec:any;
  value: string = '1';
  tipoenvioSelected: any;
  tipoenvio: any[] = [];
  constructor(private router: Router) {

  }

  showDialog(){
    this.visible = true;
  }

  validarCorreo(){
    this.verBotonCorreo = false;
  }

  ngOnInit(): void {
    this.situaciones = [
      { id: '1', nombre: 'En una sede física' },
      { id: '2', nombre: 'En el Portal Institucional' }
    ];

    this.edificios = [
      { id: '1', nombre: 'Palacio Legislativo' },
      { id: '2', nombre: 'Edf. Luis Alberto Sanchez' },
      { id: '3', nombre: 'Edf. Fernando Belaunde Terry' }
    ];

    this.motivos = [
      { id: '1', cabecera:'Trato profesional en la atención', detalle:'La persona que te atendió no lo hizo de forma adecuada.' },
      { id: '2', cabecera:'Tiempo', detalle:'Hubo demora antes y/o durante la atención que recibiste.' },
      { id: '3', cabecera:'Procedimiento', detalle:'No se siguió el procedimiento de atención o no estás de acuerdo con este.' },
      { id: '4', cabecera:'Infraestructura', detalle:'El ambiente en el que se realizó la atención y/o mobiliario no están en buen estado, no hay rutas accesibles que faciliten el desplazamiento de las personas o el local queda en un sitio inseguro.' },
      { id: '5', cabecera:'Información', detalle:'La orientación sobre el servicio fue inadecuada, insuficiente o imprecisa.' },
      { id: '6', cabecera:'Resultado', detalle:'No se pudo obtener un resultado concreto como parte del servicio y/o no se justifica la negativa en la atención del servicio.' },
      { id: '7', cabecera:'Confianza', detalle:'Ocurrió una situación que afectó la confianza y credibilidad de la entidad.' },
      { id: '8', cabecera:'Otro', detalle:'Otro' }
    ];

    this.situacioSelect = this.situaciones[0];
    
  }
 

  obtenerEmpresa(event:any){
    this.entidad = "EMPRESA LOS JARDINES DEL MAR S.A.";
    this.rucDeshabilitado = true;
  }

  aceptoLicencia(){
    this.siguiente = !this.siguiente;
  }

  clickSiguiente() {
    
    if(this.paso == 3){
      this.router.navigate(['/reclamo/codigo']);      
      return;
    }    
    this.paso++;
    if(this.paso ==2)
      this.paso2Seleccionado = "pi pi-map-marker text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
    if(this.paso == 3)
      this.paso3Seleccionado = "pi pi-check-circle text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
  }

  clickAnterior() {
    if (this.paso == 1) return;
    this.paso--;
    if(this.paso == 1){this.paso2Seleccionado = "pi pi-map-marker text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";}
    if(this.paso == 2){this.paso3Seleccionado = "pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";}
   
  }
}
