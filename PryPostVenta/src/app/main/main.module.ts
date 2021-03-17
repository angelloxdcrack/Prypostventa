import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './sistema/dashboard/dashboard.component';
import { MAIN_ROUTES } from './main-routing.module';
import { PruebaComponent } from './sistema/prueba/prueba.component';
import { FormsModule} from '@angular/forms';
import { BusquedaComponent } from './venta/busqueda/busqueda.component';
import { ProductoComponent } from './venta/producto/producto.component';
import { PagaproductoComponent } from './venta/pagaproducto/pagaproducto.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [MainComponent, DashboardComponent, PruebaComponent, BusquedaComponent, ProductoComponent, PagaproductoComponent],
  imports: [
    FormsModule,
    CommonModule,
    MAIN_ROUTES,
    CarouselModule,



  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
