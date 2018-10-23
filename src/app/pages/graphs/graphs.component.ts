import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart} from "chart.js";
import { FormGroup, FormControl } from '@angular/forms';
import { GraphData } from './graphData.component';
import { ChartType } from './chartType.component';

@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.css']
})


export class GraphsComponent implements AfterViewInit, OnInit {

   ngOnInit() {
      this.chartFiltersForm = new FormGroup({
         graphType : new FormControl(this.chartTypes[0]),
         filterTopLevel : new FormControl(), 
         filterSubLevel : new FormControl()
      });
      this.chartDataFilters = this.getDataFilters();
      this.chartDataArr.pop();
      this.addToDataArray( "Language", ["english", "spanish", "chineese"],[59, 62, 12]);
      this.addToDataArray( "Age", ["18-21", "22-29", "30-39","40-49","50-59","60+"], [18, 22, 48, 21, 30, 4]);
      this.addToDataArray( "Gender", ["male", "female"], [37, 49]);
      this.addToDataArray( "Location", ["Poughkeepsie", "Rhineback", "Pleasant Valley", "Hyde Park"], [37, 49, 50, 45]);
      this.addToDataArray( "Experience", ["Great", "Good", "Content", "Not Great", "Not Pleased", "Not Coming Back Again"], [37, 49, 39, 28, 20, 13]);
      this.initChartTypes();
      this.initChartGlobals(this.chartDataArr[1]);
   }

   ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');  
      this.initChart();
   };

   // Data Filters/Form Group
   chartFiltersForm: FormGroup;
   chartDataFilters: string[] = [];
   chartTypes: string[] = [];
   
   chartTypesObj: ChartType[] = [];

   //Canvas
   canvas: any;
   ctx: any;
   canvasB64: any;

   //Chart Object
   chart: Chart = null;

   //Chart Data (Initialize it here with a length of 1 so don't get undefined error)
   chartDataArr: Array<GraphData> = new Array(1);

   //Chart Globals
   currChartType: string;
   currDataLabels: string[];
   currDataSetData: number[];
   currDataFilterTopLevel: string;
   currDataFilterSubLevel: string;
   
   chartOptions = {
      responsive: false
   }

   private initChartTypes(): void {
      let ct;

      ct =  new ChartType("pie", "Pie");
      this.chartTypesObj[0] = ct;

      ct =  new ChartType("bar", "Bar");
      this.chartTypesObj[1] = ct;

      ct =  new ChartType("doughnut", "Doughnut");
      this.chartTypesObj[2] = ct;

      ct =  new ChartType("polarArea", "Polar Area");
      this.chartTypesObj[3] = ct;

      ct =  new ChartType("line", "Line");
      this.chartTypesObj[4] = ct;

      ct =  new ChartType("radar", "Radar");
      this.chartTypesObj[5] = ct;

      this.chartTypes = this.getAllFormatedChartTypes();
      
   } 

   private getAllFormatedChartTypes(): string[] {
      let res: string[] = [];
      this.chartTypesObj.forEach((obj) => {
         res.push(obj.displayFormat);
     });
     return res;
   }

   private getChartJSChartType(ct: string): string {
      for (let i = 0; i < this.chartTypesObj.length; i++) {
         if (this.chartTypesObj[i].displayFormat === ct) {
            return this.chartTypesObj[i].chartFormat;
         }
      }
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
         this.currChartType = this.getChartJSChartType(chartType);
         this.generateChart();
      }
   }

   downloadCanvas(): void {
      this.canvasB64 = this.chart.toBase64Image();
      console.log(this.canvasB64);
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
      return ['Age', 'Language', 'Gender', 'Location', 'Experience'];
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
                label: 'Total Distribution',
                data: this.currDataSetData,
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
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
