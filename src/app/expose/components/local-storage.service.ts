import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  guardarItem(key:string, value:any):void{
    localStorage.setItem(key, JSON.stringify(value));
  }

  obtenerItem(key:string): any{
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  eliminarItem(key:string):void{
    localStorage.removeItem(key);
  }

  limpiarTodo():void{
    localStorage.clear();
  }

}
