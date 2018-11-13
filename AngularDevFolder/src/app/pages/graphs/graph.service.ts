import { Injectable } from '@angular/core';
import { ChartColor } from 'chart.js';

@Injectable()
export class GraphService {

   private graphTypes: any[] = [
      {val: 'pie', view: 'Pie' },
      {val: 'bar', view: 'Bar' },
      {val: 'doughnut', view: 'Doughnut' },
      {val: 'polarArea', view: 'Polar Area' },
      {val: 'line', view: 'Line' },
      {val: 'radar', view: 'Radar' },
      {val: 'bubble', view: 'Bubble Hubble' },
   ]

   private colors: string[] = [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255,1)',
      'rgba(255, 159, 64, 1)'
   ]
   private chartOptions = {
      responsive: false
   }


   public getGraphTypes(): any[] {
      return this.graphTypes;
   }

   public getColors(): string[] {
      return this.colors;
   }

   public getOptions(): any {
      return this.chartOptions;
   }

   public downloadChart(event, canvas) {
      let anchor = event.target;
      let can = document.getElementsByTagName(canvas)[0] as HTMLCanvasElement;
      anchor.href = can.toDataURL("image/png");
      anchor.download = "Graph.png";
   }


}