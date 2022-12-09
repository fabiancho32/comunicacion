import { TituloService } from './../../services/titulo/titulo.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {

  @Input() padre: string = 'Nadie';

  @Output() nuevoPadre: EventEmitter<string> = new EventEmitter<string>();

  constructor(public tituloService:TituloService){

  }
  enviarMensaje() {
    if(this.padre === 'Nadie')
    {
      this.tituloService.tituloNuevo.emit('No tengo padre');
    }else{
      this.nuevoPadre.emit('¡Eres mi padre!');
    }
    
  }

}
