import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Login } from '../models/login';
import {AccesoService} from '../services/login/acceso.service';
import { Router } from '@angular/router';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   //login: Login;
   user: any ={
    username: '',
    password: '',
  };
  formulariosesion: FormGroup;
  @ViewChild( 'myModal', { static: true }) myModal;
   modalRef: any;
  constructor(
     private router: Router,
     private modalService: ModalManager,
     private _accesoservice: AccesoService,
  ) {

  }

   ngOnInit(): void {
    this.openModal();
   }
  /*
   crearFormularioLogin(): FormGroup {
    return this.formBuilder.group({
      username: [this.login.username, Validators.required],
      password: [this.login.password, Validators.required, Validators.minLength(6)]
    });

  */
  busquedaproductos(): void {
    this.router.navigate(['/producto']);
  }
  openModal(): void {
    this.modalRef = this.modalService.open(this.myModal, {
        size: "lg",
        modalClass: 'mymodal',
        hideCloseButton: true,
        centered: true,
        backdrop: true,
        animation: true,
        keyboard: false,
        closeOnOutsideClick: false,
        backdropClass: "modal-backdrop"
    })
}
  sesion(): void{
   console.log(this.user);
   this._accesoservice.Login(this.user)
    .subscribe(
         res => {
          if(res.code === 200){{
            localStorage.setItem('token', res.data['token']);
            this.modalService.close(this.modalRef);
            this.router.navigate(['/busqueda']);
          }}
        },
         err => {
          console.log(err);
          alert(err.error['message']);
      }
    );
    //
  }
}
