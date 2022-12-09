import { TituloService } from './../../services/titulo/titulo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 public title: string = "Bootstrap";

 constructor(public tituloService:TituloService) {
 this.tituloService.tituloNuevo.subscribe(tituloNuevo => {
  this.title = tituloNuevo;
 }) 
 }

}
