import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-aviso-registro-reclamo',
  templateUrl: './aviso-registro-reclamo.component.html',
  styleUrls: ['./aviso-registro-reclamo.component.scss']
})
export class AvisoRegistroReclamoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  IrSeguimiento() {
    this.router.navigate(['/reclamo/seguimiento']);
  }
}
