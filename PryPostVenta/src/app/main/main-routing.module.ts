
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './sistema/dashboard/dashboard.component';
import { PruebaComponent } from './sistema/prueba/prueba.component';
import { BusquedaComponent } from './venta/busqueda/busqueda.component';
import { ProductoComponent } from './venta/producto/producto.component';
import { PagaproductoComponent } from './venta/pagaproducto/pagaproducto.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'pagaproducto', component: PagaproductoComponent, data: { titulo: 'Pagaproducto' } },
      { path: 'producto', component: ProductoComponent, data: { titulo: 'producto' } },
      { path: 'busqueda', component: BusquedaComponent, data: { titulo: 'busqueda' } },
      { path: '', redirectTo: 'busqueda', pathMatch: 'full' }

    ]
  }];

export const MAIN_ROUTES = RouterModule.forChild(mainRoutes);
