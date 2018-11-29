import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable()
export class GraphService {

   private graphTypes: any[] = [
      { val: 'pie', view: 'Pie' },
      { val: 'bar', view: 'Bar' },
      { val: 'doughnut', view: 'Doughnut' },
      { val: 'polarArea', view: 'Polar Area' },
      { val: 'line', view: 'Line' },
      { val: 'radar', view: 'Radar' },
   ]

   // solid colors for charts
   private solidColors: string[] = [
      'rgba(054, 162, 235, 1)',
      'rgba(255, 099, 132, 1)',
      'rgba(255, 206, 086, 1)',
      'rgba(075, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 064, 1)',
      'rgba(046, 139, 087, 1)',
      'rgba(082, 139, 139, 1)',
      'rgba(070, 130, 180, 1)',
      'rgba(147, 112, 219, 1)',
      'rgba(205, 092, 092, 1)',
      'rgba(219, 112, 219, 1)',
      'rgba(255, 231, 186, 1)',
      'rgba(178, 223, 238, 1)',
      'rgba(072, 209, 204, 1)',
      'rgba(238, 180, 180, 1)',
      'rgba(153, 050, 204, 1)',
      'rgba(102, 205, 170, 1)',
      'rgba(230, 238, 000, 1)',
      'rgba(255, 193, 037, 1)',
      'rgba(000, 178, 238, 1)',
      'rgba(255, 159, 064, 1)',
      'rgba(230, 207, 161, 1)',
      'rgba(205, 197, 191, 1)',
      'rgba(202, 255, 112, 1)',
      'rgba(255, 127, 080, 1)',
      'rgba(205, 051, 051, 1)',
      'rgba(255, 127, 000, 1)',
      'rgba(255, 174, 185, 1)'
   ]

   // transparent colors for radar chart and overlapping datasets
   private transparentColors: string[] = [
      'rgba(054, 162, 235, 0.4)',
      'rgba(255, 099, 132, 0.4)',
      'rgba(255, 206, 086, 0.4)',
      'rgba(075, 192, 192, 0.4)',
      'rgba(153, 102, 255, 0.4)',
      'rgba(255, 159, 064, 0.4)',
      'rgba(046, 139, 087, 0.4)',
      'rgba(082, 139, 139, 0.4)',
      'rgba(070, 130, 180, 0.4)',
      'rgba(147, 112, 219, 0.4)',
      'rgba(205, 092, 092, 0.4)',
      'rgba(219, 112, 219, 0.4)',
      'rgba(255, 231, 186, 0.4)',
      'rgba(178, 223, 238, 0.4)',
      'rgba(072, 209, 204, 0.4)',
      'rgba(238, 180, 180, 0.4)',
      'rgba(153, 050, 204, 0.4)',
      'rgba(102, 205, 170, 0.4)',
      'rgba(230, 238, 000, 0.4)',
      'rgba(255, 193, 037, 0.4)',
      'rgba(000, 178, 238, 0.4)',
      'rgba(255, 159, 064, 0.4)',
      'rgba(230, 207, 161, 0.4)',
      'rgba(205, 197, 191, 0.4)',
      'rgba(202, 255, 112, 0.4)',
      'rgba(255, 127, 080, 0.4)',
      'rgba(205, 051, 051, 0.4)',
      'rgba(255, 127, 000, 0.4)',
      'rgba(255, 174, 185, 0.4)'
   ]

   // creates a sinng dataset chart
   public createSingleChart(context, chartType, map: Map<string, number>): Chart {
      return new Chart(context, {
         type: chartType,
         data: {
            labels: Array.from(map.keys()),
            datasets: this.createDataset(map, chartType)
         },
         options: this.getOptions(chartType)
      });
   }

   // creates dataset for singlechart
   private createDataset(data: Map<string, number>, chartType) {
      return [{
         label: 'Total',
         data: Array.from(data.values()),
         backgroundColor: this.getColors(chartType),
         fill: chartType != 'line' ? true : false,
         borderColor: this.getColors(chartType),
         lineTension: chartType != 'line' ? 0 : 1
      }]
   }

   // creates a matrix chart for mutiple datasets
   public createMatrixChart(context, chartType, matrixData): Chart {
      return new Chart(context, {
         type: chartType,
         data: matrixData,
         options: this.getOptions(chartType)
      })
   }

   // date chart
   public createDateChart(context, chartType, matrixData): Chart {
      return new Chart(context, {
         type: chartType,
         data: matrixData,
         options: {
            responsive: true,
            title: {
               display: true,
               text: "Responses By Survey For Past Year"
            },
            scales: {
               xAxes: [{
                  type: "time",
                  time: {
                     tooltipFormat: 'll',
                  },
                  scaleLabel: {
                     display: true,
                     labelString: 'Date'
                  }
               }],
               yAxes: [{
                  scaleLabel: {
                     display: true,
                     labelString: 'value'
                  }
               }]
            }
         }
      })
   }

   // returns the graph types
   public getGraphTypes(): any[] {
      return this.graphTypes;
   }

   // returns colors based off of chart type
   public getColors(chartType): string[] {
      if (chartType == "radar") {
         return this.transparentColors;
      }
      else {
         return this.solidColors;
      }
   }

   // returns a color by index, if not enough then
   public getColorByIndex(i: number, chartType?): string {
      let colors;
      if (i > this.getColors(chartType).length) {
         // if the colors overflow the current chart colors, move to other color dataset and subtract index to be in scope
         if (chartType == 'bar') {
            colors = this.getColors('line');
            return colors[i - this.getColors('line').length + 2];
         }
         else {
            colors = this.getColors('bar');
            return colors[i - this.getColors('bar').length + 2];
         }
      } else {
         colors = this.getColors(chartType);
         return colors[i];
      }
   }

   // sets the options for the chart based off of type
   public getOptions(chartType): any {
      switch (chartType) {
         case 'pie':
            return this.pieChartOptions;
         case 'bar':
            return this.barChartOptions;
         case 'doughnut':
            return this.doughnutChartOptions;
         case 'polarArea':
            return this.polarAreaChartOptions;
         case 'line':
            return this.lineChartOptions;
         case 'radar':
            return this.radarChartOptions;
         default:
            return this.defaultOptions;

      }
   }
   /**
    *  Chart Options
    */

   private pieChartOptions = {
      responsive: false,
   }

   private barChartOptions = {
      responsive: false,
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true
            }
         }]
      }
   }

   private doughnutChartOptions = {
      responsive: false,
   }

   private lineChartOptions = {
      responsive: false,
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true
            }
         }]
      }
   }

   private polarAreaChartOptions = {
      responsive: false,
   }

   private radarChartOptions = {
      responsive: false,
   }

   private defaultOptions = {
      responsive: false,
   }

   /**
    *  downloads the chart
    */

   public downloadChart(event, canvas) {
      let anchor = event.target;
      let can = document.getElementsByTagName(canvas)[0] as HTMLCanvasElement;
      anchor.href = can.toDataURL("image/png");
      anchor.download = "Graph.png";
   }
}
