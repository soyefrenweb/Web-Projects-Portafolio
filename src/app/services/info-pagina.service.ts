import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Importacion de interfaces
import { InfoPagina } from '../interfaces/info-pagina.interface';
// Publicacion de eventos, suscribirse y desuscribirse.
import { Observable } from 'rxjs'; 
import { EquipoFirebase } from '../interfaces/equipo-firebase.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    // Propiedades
    // info: any = {}; // objeto vacio, se utiliza cuando no se conoce o no desea especificar el tipo de variable en tiempo de compilacion.
    
    // Ejemplo de mandar a llamar la interface con sus propiedades.
    info: InfoPagina = {};
    infoEquipo: EquipoFirebase [] = [];
    cargada = false; // Indica si hay una carga o proceso cargado o completyado.

    constructor( private http: HttpClient ){
       this.cargarInfo();
      this.cargarInfoEquipoFirebase();
      // this.cargarEquipo();
    }
    
    private cargarInfo(){ // Leer el archivo JSON
      this.http.get<InfoPagina>('assets/data/data-pagina.json')
      .subscribe( resp => {
         this.cargada = true;
         this.info = resp;
         // console.log(resp);
     });
   }
    private cargarInfoEquipoFirebase(){ // Leer el archivo JSON
      this.http.get<EquipoFirebase[]>('https://angular-seweb-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( resp => {
         this.cargada = true;
         this.infoEquipo = resp;
        //console.log(resp);
     });
   }
 
   private cargarEquipo(){
     // método slice para obtener copia del array sin modificar el original.
    //  this.info.equipo_trabajo = this.info.equipo_trabajo?.slice();

     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {
        this.info = resp;
        console.log(resp);
      })
    }
    
   // De manera local 
  //  getEquipo(): Observable<InfoPagina>{
  //    Solicitud HTTP GET al archivo JSON
  //   return this.http.get<InfoPagina>('assets/data/data-pagina.json');
  //  }

   getEquipoFirebase(): Observable<EquipoFirebase[]>{ // Usando el servicio de firebase 
    return this.http.get<EquipoFirebase[]>('https://angular-seweb-default-rtdb.firebaseio.com/equipo.json'); // Solicitud HTTP GET al archivo JSON
   }
   

  }