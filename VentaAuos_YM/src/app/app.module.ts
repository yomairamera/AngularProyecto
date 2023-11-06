import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './paginas/Vehiculos/Vehiculos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptor } from './interceptores/userInterceptor';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';
import { PaginacionComponent } from './componentes/PaginacionTabla/paginacion.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { Clientescomponent } from './clientes/clientes.component';
import { MsjValidacionComponent } from './msjValidacion/msjValidacion.component';

@NgModule({
  declarations: [				
    AppComponent,
    VehiculosComponent,
    CalificacionComponent,
    PaginacionComponent,
    VehiculoDetalleComponent,
    Clientescomponent,
    MsjValidacionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
