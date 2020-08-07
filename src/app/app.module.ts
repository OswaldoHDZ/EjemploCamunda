import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//Componentes creados
import { FormaComponent } from './forma/forma.component';


//Servicios
import { HttpClientModule } from "@angular/common/http"
import { DataApiService } from "src/app/services/data-api.service"
 


@NgModule({
  declarations: [
    AppComponent,
    FormaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
