import { Component, OnInit } from '@angular/core';
// Service
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // Injection de service
  constructor( public _Service: InfoPaginaService ){

  }

  ngOnInit(){

  }

}
