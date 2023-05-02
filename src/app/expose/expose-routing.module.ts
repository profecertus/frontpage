import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroReclamoComponent} from "./components/registro-reclamo/registro-reclamo.component";
import {AvisoRegistroReclamoComponent} from "./components/aviso-registro-reclamo/aviso-registro-reclamo.component";
import {SeguimientoReclamoComponent} from "./components/seguimiento-reclamo/seguimiento-reclamo.component";
import {BuscarReclamoComponent} from "./components/buscar-reclamo/buscar-reclamo.component";
import { AvisoPrevioReclamoComponent } from './components/aviso-previo-reclamo/aviso-previo-reclamo.component'

const routes: Routes = [
  {
  path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
},

  {
  path: 'registro',
  component: RegistroReclamoComponent
},

  {
    path: 'codigo',
    component: AvisoRegistroReclamoComponent
  },

  {
    path: 'previo',
    component:AvisoPrevioReclamoComponent
  },

  {
    path: 'seguimiento',
    component: SeguimientoReclamoComponent
  },
  {
    path: 'buscar',
    component: BuscarReclamoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExposeRoutingModule { }
