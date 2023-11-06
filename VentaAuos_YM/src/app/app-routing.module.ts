import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './paginas/Vehiculos/Vehiculos.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle.component';
import { HomeComponent } from './paginas/Home/Home.component';
import { Clientescomponent } from './clientes/clientes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vehiculos',
    component: VehiculosComponent
  },
  {
    path: 'vehiculos/:codigo',
    component: VehiculoDetalleComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'clientes',
    component: Clientescomponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
