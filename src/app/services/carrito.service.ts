import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private  http: HttpClient) { }
  getPeriodos(){
    // let headers = new HttpHeaders({ 'Authorization': this.TOKEN,'content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
    return this.http.get<any>('http://localhost/api/mostrarCarrito/',  {responseType: 'json'});
  }
}
