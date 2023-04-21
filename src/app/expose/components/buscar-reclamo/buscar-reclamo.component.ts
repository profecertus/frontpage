import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscar-reclamo',
  templateUrl: './buscar-reclamo.component.html',
  styleUrls: ['./buscar-reclamo.component.scss']
})
export class BuscarReclamoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BuscarSeguimiento() {
    this.router.navigate(['reclamo/seguimiento']);

  }
}
