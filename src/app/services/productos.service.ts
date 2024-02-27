import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// interface
import { Iproducto } from '../interfaces/producto.interface';
import { ProductDescripcion } from '../interfaces/productos-desc.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true; // Carga de resp
  productos:  Iproducto[] = [];
  productosFiltrado: Iproducto[] = [];

  constructor( private http:HttpClient ) { 
    this.cargarProductos();
  }


  private cargarProductos(){
    this.http.get<Iproducto[]>('https://angular-seweb-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( resp => {
      this.productos = resp;
      // console.log(this.productosIdx);
      this.cargando = false; // Termina carga despues de obtenerla.
    })
  }

  getProductosFirebase(): Observable<Iproducto[]>{
    return this.http.get<Iproducto[]>('https://angular-seweb-default-rtdb.firebaseio.com/productos_idx.json')
  }

  getContetProduct( id: string ): Observable<ProductDescripcion>{
    return this.http.get<ProductDescripcion>(`https://angular-seweb-default-rtdb.firebaseio.com/productos/${ id }.json`);
    // ``: los Baketik nos permiten utilizar template literales, permite hacer inserciones de pedazos de strings o expresiones dentro de un string.
  }

}
