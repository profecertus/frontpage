import { Component } from '@angular/core';
import {parseJson} from "@angular/cli/src/utilities/json-file";
import { LocalStorageService } from "./expose/components/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SLRD';

  constructor(private localStoreService:LocalStorageService) {
    this.localStoreService.eliminarItem("reclamo");
    this.localStoreService.eliminarItem("datosGenerales");
  }

}
