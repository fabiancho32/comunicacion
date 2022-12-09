import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  tituloNuevo:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
