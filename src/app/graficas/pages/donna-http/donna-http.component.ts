import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficaService } from '../../services/grafica.service';

@Component({
  selector: 'app-donna-http',
  templateUrl: './donna-http.component.html',
  styles: [
  ]
})
export class DonnaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#4F13EB',
        '#14DEF5',
        '#40DE1D',
        '#F5C514',
        '#EB5E33',

      ]
    }
  ]

  constructor( private graficaService: GraficaService ) { }

  ngOnInit(): void {
    // this.graficaService.getUsuariosRedeSocilaes().subscribe( data => {
    //   console.log(data);
    //   const labels = Object.keys( data );
    //   const values = Object.values( data );

    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);
    // });

    this.graficaService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
        
      })
  }

}
