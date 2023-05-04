import { Component } from '@angular/core';
import { LocalStorageService } from "./expose/components/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SLRD';

  constructor(private localStoreService:LocalStorageService) {
    this.localStoreService.eliminarItem("reclamo");
    this.localStoreService.eliminarItem("datosGenerales");
  }

}
