import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './blog/blog.component';
import { TestModelComponent } from './test-model/test-model.component';
import { ItemComponent } from './pages/item/item.component';

// Declaracion de componentes del modulo.
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BlogComponent,
    TestModelComponent
  ],
  // Integración de modulos para proporcionar funcinalidades esenciales(Gestión de rutas y la interacción con el DOM).
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Permite realizar peticiones, put, get, delete, etc...
    
  ],
  // Definición de proveedores de servicios del modulo.
  providers: [

  ],
  // Indica el componente principal que debe iniciarse al arrancar la aplicación.
  bootstrap: [AppComponent]
})
export class AppModule { }
