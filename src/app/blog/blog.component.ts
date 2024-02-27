import { Component, OnInit } from '@angular/core';

// Servcice import
import { InfoPaginaService } from '../services/info-pagina.service';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { EquipoFirebase } from '../interfaces/equipo-firebase.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  
  data!: InfoPagina; // data!: asegura que la propiedad sera inicializada antes de utilizar.
  data1: EquipoFirebase[] = []; // asignación de interface a variable.

  constructor( public infoService: InfoPaginaService ){}
  

  ngOnInit(){

      // this.infoService.getEquipo().subscribe((data: InfoPagina) => {
      //   this.data = data;
      //   console.log(this.data.equipo_trabajo);
      // });

      // Carga del archivo Firebase, datos externos.
      this.infoService.getEquipoFirebase().subscribe((data1: EquipoFirebase[]) => {
        this.data1 = data1;
        // console.log(this.data1); // verificación de arreglo en consola.
      });
  }
}

