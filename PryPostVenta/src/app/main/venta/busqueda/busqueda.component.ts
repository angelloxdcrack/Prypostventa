import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccesoService } from 'src/app/services/login/acceso.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor(
     private router: Router,
  ) {
  }
   ngOnInit(): void {
   }

  busquedaproductos(): void {
    this.router.navigate(['/producto']);
  }

  }



