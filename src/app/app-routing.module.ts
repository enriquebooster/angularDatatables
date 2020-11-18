import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataTablesComponent} from './views/data-tables/data-tables.component';


const routes: Routes = [
  {
    path: '',
    component : DataTablesComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
