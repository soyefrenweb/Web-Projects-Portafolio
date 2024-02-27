import { Component } from '@angular/core';

import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // injection de servicio llamado en la app, para poder cargar toda informacion de nuestro servicio Json.
  constructor( public InfoPaginaService: InfoPaginaService, 
               public ProductosService: ProductosService ){ // Se instancia de forma global.

  }

}
