import { Component, OnInit } from '@angular/core';
import {Situacion} from "../../model/situacion.interface";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registro-reclamo',
  templateUrl: './registro-reclamo.component.html',
  styleUrls: ['./registro-reclamo.component.scss']
})

export class RegistroReclamoComponent implements OnInit {
  situaciones: Situacion[] | any;
  situacioSelect: Situacion | any;
  selectedOption:any;
  esEntidad:string = '';


  date: Date[] | any;


  param:string = '';
  param1:string = '';
  text:string = '';
  paso:number = 1;
  selectedCategories: any[] = [];
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];
  tipoenvioSelected: any;
  tipoenvio: any[] = [];
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.situaciones = [
      { id: '1', nombre: 'En una sede física' },
      { id: '2', nombre: 'En el Portal Institucional' }
    ];

    this.tipoenvio = [
      { nombre: 'Quiero recibirla por correo electrónico', id: 'a' },
      { nombre: 'Quiero recibirla por celular', id: 'b' },
      { nombre: 'Quiero recoger una copia en sede del Congreso', id: 'c' },
    ];
    this.situacioSelect = this.situaciones[0];
    this.tipoenvioSelected = this.tipoenvio[0];


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
