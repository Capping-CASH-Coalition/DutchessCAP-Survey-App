import { Injectable } from '@angular/core';
import { ChartColor } from 'chart.js';
import { Chart } from 'chart.js';

@Injectable()
export class GraphService {

   private graphTypes: any[] = [
      {val: 'pie', view: 'Pie' },
      {val: 'bar', view: 'Bar' },
      {val: 'doughnut', view: 'Doughnut' },
      {val: 'polarArea', view: 'Polar Area' },
      {val: 'line', view: 'Line' },
      {val: 'radar', view: 'Radar' },
   ]

   private colors: string[] = [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255,1)',
      'rgba(255, 159, 64, 1)'
   ]

   private linearChartOptions = {
      responsive: false,
      scales: {
         yAxes: [{
             ticks: {
                 beginAtZero: true
             }
         }]
     }
   }

   private radialChartOptions = {
      responsive: false,
   }

   public createSingleChart(context, chartType, map: Map<string, number>): Chart {
      return new Chart(context, {
         type: chartType,
         data: {
            labels: Array.from(map.keys()),
            datasets: [{
               label: 'Total',
               data: Array.from(map.values()),
               backgroundColor: this.getColors()
            }]
         },
         options: this.getOptions(chartType)
      });
   }

   public createMatrixChart(context, chartType, matrixData ): Chart {
      return new Chart(context, {
         type: chartType,
         data: matrixData,
         options: this.getOptions(chartType)
      })
   }

   public getGraphTypes(): any[] {
      return this.graphTypes;
   }

   public getColors(): string[] {
      return this.colors;
   }

   public getColorByIndex(i: number): string {
      if ( i > this.colors.length ) {
         console.log("color out of bounds");
         return null;
      }
      else {
         return this.colors[i];
      }
   }

   public getOptions(chartType): any {
      if ( chartType == 'bar' || chartType == 'line' )
         return this.linearChartOptions;
      else 
         return this.radialChartOptions;  
   }

   public downloadChart(event, canvas) {
      let anchor = event.target;
      let can = document.getElementsByTagName(canvas)[0] as HTMLCanvasElement;
      anchor.href = can.toDataURL("image/png");
      anchor.download = "Graph.png";
   }


}