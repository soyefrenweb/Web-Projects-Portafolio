import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { BlogComponent } from './blog/blog.component';
import { ItemComponent } from './pages/item/item.component';

const portasfolioRoutes: Routes = [
   { path: 'home', component: PortafolioComponent },
   { path: 'about', component: AboutComponent },
   { path: 'item/:id', component: ItemComponent },
   { path: 'blog', component: BlogComponent },
   { path: '**', pathMatch: 'full',redirectTo: 'home' },// Esta linea garantiza que cualquier URL nomanejada por otras rutas se redirija a la pagina de inicio de la aplicacion raiz. 
];

@NgModule({
  imports: [RouterModule.forRoot(portasfolioRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
