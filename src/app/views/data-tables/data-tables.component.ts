import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {
  dtOptions: DataTables.Settings = {
    dom: 'tip',                      // Estructura de la tabla     --> https://datatables.net/reference/option/dom
    lengthMenu: [],                      // Menú de tamaños de página   --> https://datatables.net/reference/option/lengthMenu
    order: [1, 'desc'],
    paging: true,
    pagingType: 'simple_numbers',
    pageLength: 10,
  };.
  dtTrigger: Subject<any> = new Subject();

  list: any[] = [];
  private resp: any;
  constructor(private  carritoService: CarritoService) { }

  ngOnInit(): void {

    this.carritoService.getPeriodos().subscribe(
      res => {
        this.resp = res;
        console.log(this.resp);
        console.log(this.resp.content);
        if (this.resp.success){
          this.list = this.resp.content;
          this.dtTrigger.next();

        } else {
          alert('no se pudo cargar los periodos');
        }
      },
      err =>
        console.error('Error-----' + JSON.stringify(err))
    ); // fin del subscribe
  }

}
