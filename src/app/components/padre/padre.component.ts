import { TituloService } from './../../services/titulo/titulo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {
 public padre:string = 'Padre';

constructor(public tituloService:TituloService){

}

 leerMensaje(mensaje:string){
  this.tituloService.tituloNuevo.emit(mensaje);
 }
}
