import {Component, ElementRef, OnInit} from '@angular/core';
import {Situacion} from "../../model/situacion.interface";
import {Router} from "@angular/router";
import { LocalStorageService } from "../local-storage.service";
import { MessageService } from "primeng/api";
import {Time} from "@angular/common";

@Component({
  selector: 'app-registro-reclamo',
  templateUrl: './registro-reclamo.component.html',
  styleUrls: ['./registro-reclamo.component.scss'],
  providers: [MessageService]
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
  paso4Seleccionado:string = "pi pi-print text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
  motivoSeleccionado:string = "";
  txtSiguiente:string = "Siguiente";
  accLicencia:boolean = false;

  date: Date | any;
  hour: Time | any;


  text:string = '';
  paso:number = 1;
  stateOptions: any[] = [{label: 'SI', value: '1'}, {label: 'NO', value: '0'}];
  edificios: any[] = [];
  edifSelec:any;
  value: string = '1';
  constructor(private router: Router, private localStorageService:LocalStorageService,
              private messageService:MessageService, private el:ElementRef) {

  }

  showDialog(){
    this.visible = true;
  }

  validarCorreo(){
    //Verificar que los correos sean identicos.
    if(this.email == this.repitaEmail){
      this.verBotonCorreo = false;
    }else {
      this.messageService.add({
        severity: 'error',
        summary: 'Rechazado',
        detail: 'Las direcciones de correo no coinciden'
      });
    }
  }

  existeMail():void{
    if( this.numeroCorreo.length == 6 ){
      if(this.el.nativeElement.querySelector("#dd_tipoDocumento") == ""){
        this.messageService.add({severity:'error', summary:'Rechazado', detail:'Debe ingresar un tipo de documento'});
        return;
      }
      this.messageService.add({severity:'success', summary:'Exito', detail:'Se valido el codigo Email'});
      let datosGenerales = this.localStorageService.obtenerItem("datosGenerales");
      let reclamo = {
        "datosGenerales":datosGenerales,
        "email":this.email,
        "domicilio": this.el.nativeElement.querySelector("#domicilio").value,
        "telefono": this.el.nativeElement.querySelector("#telefono").value,
      };
      this.localStorageService.guardarItem("reclamo", reclamo);
    }
  }

  ngOnInit(): void {
    this.situaciones = [
      { id: '1', nombre: 'En una sede física' },
      { id: '2', nombre: 'En el Portal Institucional' }
    ];

    this.edificios = [
      { id: '1', nombre: 'Palacio Legislativo' },
      { id: '2', nombre: 'Edf. Luis Alberto Sanchez' },
      { id: '3', nombre: 'Edf. Fernando Belaunde Terry' },
      { id: '4', nombre: 'Edf. Roberto Ramirez del Villar' },
      { id: '5', nombre: 'Edf. José F. Sánchez Carrión' },
      { id: '6', nombre: 'Edf. Santos Atahualpa' },
      { id: '7', nombre: 'Edf. Victor R. Haya de la Torre' },
      { id: '8', nombre: 'Complejo Legislativo' },
      { id: '9', nombre: 'Hospicio Ruiz Dávila' },
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

  cambiaCheck(event:any){
    if(!event.checked){
      this.ruc = '';
      this.entidad = '';
    }
  }

  obtenerEmpresa(event:any){
    this.entidad = "EMPRESA LOS JARDINES DEL MAR S.A.";
    this.rucDeshabilitado = true;
    this.messageService.add({severity:'success', summary:'Exito', detail:'Se obtuvo el nombre de la empresa'});
    let reclamo = this.localStorageService.obtenerItem("reclamo") ;
    reclamo.ruc = this.ruc;
    reclamo.empresa = this.entidad;

    this.localStorageService.guardarItem("reclamo", reclamo);

  }

  aceptoLicencia(event:any){
    this.siguiente = !event.checked;
  }

  clickSiguiente() {
    let reclamo = this.localStorageService.obtenerItem("reclamo");


    if(this.paso == 2){
      reclamo.motivoSeleccionado = this.motivoSeleccionado;
      reclamo.trataron = this.value;
    }

    if(this.paso == 3){
      reclamo.tipoLugar = this.situacioSelect;
      reclamo.lugarOcurrencia = this.edifSelec;
      reclamo.fechaOcurrencia = this.date;
      reclamo.horaOcurrencia = this.hour;
      reclamo.descripcion = this.text;
    }
    if(this.paso == 4){
      this.router.navigate(['/reclamo/codigo']);
      return;
    }
    this.localStorageService.guardarItem("reclamo", reclamo);

    this.paso++;
    if(this.paso ==2)
      this.paso2Seleccionado = "pi pi-map-marker text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
    if(this.paso == 3)
      this.paso3Seleccionado = "pi pi-check-circle text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
    if(this.paso == 4){
      this.paso4Seleccionado = "pi pi-print text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
      this.txtSiguiente = "Finalizar";
    }

  }

  clickAnterior() {
    if (this.paso == 1){
      return;
    }
    this.paso--;
    if(this.paso == 1){
      this.paso2Seleccionado = "pi pi-map-marker text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
      let reclamo = this.localStorageService.obtenerItem("reclamo");
      this.email = reclamo.email;
      this.repitaEmail = reclamo.email;
      this.verBotonCorreo = false;
      this.numeroCorreo = '000000';
    }
    if(this.paso == 2){
      this.paso3Seleccionado = "pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
    }

    if(this.paso == 3){
      this.paso4Seleccionado = "pi pi-print text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3";
      this.txtSiguiente = "Siguiente";
    }

  }
}
