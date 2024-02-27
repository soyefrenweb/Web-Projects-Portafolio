import { Component, OnInit } from '@angular/core';

import { Iproducto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit{

  Dproductos: Iproducto [] = [];

  constructor( public infoProService: ProductosService ){}

  ngOnInit(): void {
    this.infoProService.getProductosFirebase().subscribe((Dproductos: Iproducto[]) =>{
      this.Dproductos = Dproductos;
    })
  }

}
