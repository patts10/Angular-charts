import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonnaHttpComponent } from './pages/donna-http/donna-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { DonnaComponent } from './pages/donna/donna.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonnaHttpComponent,
    GraficaBarraComponent,
    DonnaComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    ChartsModule
  ]
})
export class GraficasModule { }
