import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesComponent } from './views/data-tables/data-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
