import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart, ChartDataSets } from "chart.js";
import { FormGroup, FormControl } from '@angular/forms';
import { GraphData } from './graphData.component';

@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements AfterViewInit, OnInit {

   ngOnInit() {
      this.chartFiltersForm = new FormGroup({
         graphType : new FormControl(this.chartTypes[0]),
         filterTopLevel : new FormControl(), //new FormControl(this.chartDataFilters[0]),
         filterSubLevel : new FormControl()//new FormControl(this.chartDataFilters[1])
      });
      this.chartDataFilters = this.getDataFilters();
      this.chartDataArr.pop();
      this.addToDataArray("language", ["english", "spanish", "chineese"],[59, 62, 12]);
      this.addToDataArray( "age", ["18-21", "22-29", "30-39","40-49","50-59","60+"], [18, 22, 48, 21, 30, 4]);
      this.addToDataArray( "gender", ["male", "female"], [37, 49]);
      this.initChartGlobals(this.chartDataArr[1]);
   }

   ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');  
      this.initChart();
      //this.generateChart();

   };

   // Data Filters/Form Group
   chartFiltersForm: FormGroup;
   chartDataFilters: string[];
   chartTypes: Array<string> = ['pie', 'bar', 'doughnut', 'polarArea'];

   //Canvas
   canvas: any;
   ctx: any;

   //Chart Object
   chart: Chart = null;

   //Chart Data (Initialize it here with a length of 1 so don't get undefined error)
   chartDataArr: Array<GraphData> = new Array(1);

   //Current Chart Settings
   currChartType: string;
   currDataLabels: string[];
   currDataSetData: number[];
   currDataFilterTopLevel: string;
   currDataFilterSubLevel: string;
   
   chartOptions = {
      responsive: false,
   }

   updateTopFilter(filter: string) {
      if (this.currDataFilterTopLevel != filter) {
         this.currDataFilterTopLevel = filter;
         this.updateCurrCharDataLabels(filter);
         this.generateChart();
      }
   }

   updateSubFilter(filter: string) {
      if (this.currDataFilterSubLevel != filter) {
         this.currDataFilterSubLevel = filter;
      }
   }

   updateChartType(chartType: string) {
      if (this.currChartType != chartType) {
         this.currChartType = chartType;
         this.generateChart();
      }
   }

   private updateCurrCharDataLabels(filter: string): void {
      let gd = this.getGraphDataFromDataArray(filter);
      this.currDataSetData = gd.data;
      this.currDataLabels = gd.labels;
   }

   private generateChart(): void {
      this.chart.destroy();
      this.chart = this.getCurrChartGlobals();
      this.chart.update();
   }

   private initChart(): void {
      
      this.chart = this.getCurrChartGlobals();
      this.chart.update();
   }

   
   private getDataFilters(): string[] {
      return ['age', 'language', 'gender', 'location', 'experience'];
   }

   private initChartGlobals(gd: GraphData): void {
      this.currChartType = 'pie';
      this.currDataLabels = gd.labels;
      this.currDataSetData = gd.data;
   }


   private getCurrChartGlobals(): Chart {
      let c = new Chart(this.ctx, {
         type: this.currChartType,
         data: {
            labels: this.currDataLabels,
            datasets: [{
                label: 'Totals',
                data: this.currDataSetData,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255,1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }]
        },
         options: this.chartOptions
      })
      return c;
   }
   
   private addToDataArray(key:string, labels:Array<string>, data:Array<number>): void {
      let gd = new GraphData(key, labels, data);
      this.chartDataArr.push(gd);
   }

   private getGraphDataFromDataArray(key: string): GraphData {
      for (let i = 0; i < this.chartDataArr.length; i++) {
         if (this.chartDataArr[i].key === key) {
            return this.chartDataArr[i];
         }
      }
   }

   
}
