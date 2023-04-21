import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExposeRoutingModule } from './expose-routing.module';
import { RegistroReclamoComponent } from './components/registro-reclamo/registro-reclamo.component';
import { AvisoRegistroReclamoComponent } from './components/aviso-registro-reclamo/aviso-registro-reclamo.component';
import { SeguimientoReclamoComponent } from './components/seguimiento-reclamo/seguimiento-reclamo.component';
import { BuscarReclamoComponent } from './components/buscar-reclamo/buscar-reclamo.component';
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";
import {EditorModule} from "primeng/editor";
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from "@angular/common/http";
import {CheckboxModule} from "primeng/checkbox";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {TagModule} from "primeng/tag";
import { InicioComponent } from './components/inicio/inicio.component';
import {RippleModule} from "primeng/ripple";
import { ValidaDocumentoComponent } from './components/valida-documento/valida-documento.component';


@NgModule({
  declarations: [
    RegistroReclamoComponent,
    AvisoRegistroReclamoComponent,
    SeguimientoReclamoComponent,
    BuscarReclamoComponent,
    InicioComponent,
    ValidaDocumentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExposeRoutingModule,
    DropdownModule,
    ButtonModule,
    BadgeModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule,
    EditorModule,
    HttpClientModule,
    FileUploadModule,
    CheckboxModule,
    TagModule
  ]
})
export class ExposeModule { }
