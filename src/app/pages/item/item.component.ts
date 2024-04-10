import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductDescripcion } from 'src/app/interfaces/productos-desc.interface';
import { ProductosService } from 'src/app/services/productos.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit{

  // id: string;
  public producto!: ProductDescripcion;
  id?: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ){
                  // this.id = '';
               }

  ngOnInit(): void {



     this.route.params.subscribe( parametros => {
     console.log(parametros['id'])
    })

      this.route.params
          .subscribe( parametros => {
            this.productoService.getContetProduct(parametros['id'])
                .subscribe( (prod: ProductDescripcion) => {
                  this.id = parametros['id'];
                  this.producto = prod;
                  console.log(this.producto);
                  console.log(this.producto.categoria);
                },
                error => {
                  console.error("Error al obtener el producto:", error);
                }
              );
          });
  }
}
