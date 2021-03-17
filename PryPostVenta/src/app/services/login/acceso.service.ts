import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Login} from '../../models/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constantes } from 'src/app/constantes/constants';
@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  token: string;
  storeid: number;
  warehouseid: number;
  cashboxid: number;
  businessunitid: number;
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.asignarHeaders();
  }
  asignarHeaders(): void {

}
  Login(login): Observable<any> {

    return this.http.post( '/admin/apiPos/signin', login);
  }

  guardarStorage( token: string, storeid: number , warehouseid: number, cashboxid: number, businessunitid: number ): void {

    localStorage.setItem('token', token);
    localStorage.setItem('storeid', JSON.stringify(storeid));
    localStorage.setItem('warehouseid', JSON.stringify(warehouseid));
    localStorage.setItem('cashboxid', JSON.stringify(cashboxid));
    localStorage.setItem(' businessunitid', JSON.stringify(businessunitid));
    this.token = token;
    this.storeid = storeid;
    this.warehouseid = warehouseid;
    this.cashboxid = cashboxid;
    this.businessunitid = businessunitid;
}
}
