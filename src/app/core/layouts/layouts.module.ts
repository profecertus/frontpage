import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrincipalLayoutComponent} from "./principal-layout/principal-layout.component";
import {RouterModule} from "@angular/router";
import { PortadaLayoutComponent } from './portada-layout/portada-layout.component';
import { PruebaLayoutComponent } from './prueba-layout/prueba-layout.component';
import {PanelMenuModule} from "primeng/panelmenu";
import {RippleModule} from "primeng/ripple";
import {AvatarModule} from "primeng/avatar";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [PrincipalLayoutComponent, PortadaLayoutComponent, PruebaLayoutComponent],
  imports: [

    RouterModule,
    PanelMenuModule,
    RippleModule,
    AvatarModule,
    BreadcrumbModule,
    OverlayPanelModule,
    ButtonModule,
  ]
})
export class LayoutsModule { }
