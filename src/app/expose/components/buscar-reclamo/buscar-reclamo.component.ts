import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscar-reclamo',
  templateUrl: './buscar-reclamo.component.html',
  styleUrls: ['./buscar-reclamo.component.scss']
})
export class BuscarReclamoComponent {

  constructor(private router: Router) { }

  BuscarSeguimiento() {
    this.router.navigate(['reclamo/seguimiento']);

  }
}
