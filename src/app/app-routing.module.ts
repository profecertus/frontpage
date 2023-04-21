import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalLayoutComponent} from "./core/layouts/principal-layout/principal-layout.component";
import {PortadaLayoutComponent} from "./core/layouts/portada-layout/portada-layout.component";
import {InicioComponent} from "./expose/components/inicio/inicio.component";
import {PruebaLayoutComponent} from "./core/layouts/prueba-layout/prueba-layout.component";

const routes: Routes = [
  {
    path: '',
    component: PortadaLayoutComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      }
    ]
  },

  {
    path: 'reclamo',
    component: PrincipalLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./expose/expose.module').then(m => m.ExposeModule),
      }],
  },
  {
    path: 'prueba',
    component: PruebaLayoutComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
