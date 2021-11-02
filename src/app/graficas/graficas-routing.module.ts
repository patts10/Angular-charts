import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonnaComponent } from './pages/donna/donna.component';
import { DonnaHttpComponent } from './pages/donna-http/donna-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'barra',
        component: BarrasComponent
      },
      {
        path: 'barra-doble',
        component: BarrasDobleComponent
      },
      {
        path: 'dona',
        component: DonnaComponent
      },
      {
        path: 'dona-http',
        component: DonnaHttpComponent
      },
      {
        path: '**',
        redirectTo: 'barra'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
