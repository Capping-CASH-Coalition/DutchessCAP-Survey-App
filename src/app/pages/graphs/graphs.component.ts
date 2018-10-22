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

   myForm: FormGroup;
   canvas: any;
   ctx: any;
   chart: Chart;

   chartTypes: Array<string> = ['pie', 'bar', 'doughnut', 'polarArea'];
   currChartType: string = this.chartTypes[0];

   chartDataFilters: Array<string> = ['age', 'language', 'gender', 'location', 'experience'];
   currDataFilterTopLevel: string;
   currDataFilterSubLevel: string;

   chartDataArr: Array<GraphData>;
   currChartData: GraphData;

   chartData;

   chartOptions = {
      responsive: false,
    }

   private getChartLabels(): string[] {
      return this.currChartData.labels;
   }

   private getChartDataSetsData(): number[] {
      return this.currChartData.data;
   }

   private getChartDataSetsLabel(): string {
      return this.currChartData.key.toUpperCase();
   }

   private setChartDataSetsLabels(s: string[]): void {
      this.currChartData.labels = s;
   }

   private setChartDataSetsData(d: number[]): void {
      this.currChartData.data = d;
   }

   updateTopFilter(filter: string) {
      this.currDataFilterTopLevel = filter;
      this.updateChart();
   }

   updateSubFilter(filter: string) {
     this.currDataFilterSubLevel = filter;
     this.updateChart();
  }

  updateChartType(chartType: string) {
     this.currChartType = chartType;
     this.updateChart();
  }

   private getGraphDataFromKey(key: string): GraphData {
      for (let i = 0; i < this.chartDataArr.length; i++) {
         if (this.chartDataArr[i].key === key) {
            return this.chartDataArr[i];
         }
      }
   }

   private updateChart(): void {
      let gd: GraphData = this.getGraphDataFromKey(this.currDataFilterTopLevel);
      console.log(gd);
      this.setChartDataSetsLabels(gd.labels);
      this.setChartDataSetsData(gd.data);
      this.chart.destroy();
      this.generateChart();
   }

   private generateChart(): void {
      this.chart = new Chart(this.ctx, {
         type: this.currChartType,
         data: this.chartData,
         options: this.chartOptions
      });
   }


   private addToDataArray(key:string, labels:Array<string>, data:Array<number>): void {
      let gd = new GraphData(key, labels, data);
      this.chartDataArr.push(gd);
   }

   ngOnInit() {
      this.myForm = new FormGroup({
         graphType : new FormControl(this.chartTypes[0]),
         filterTopLevel : new FormControl(this.chartDataFilters[0]),
         filterSubLevel : new FormControl(this.chartDataFilters[1])
      });
   }
/*
    ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');  
      this.addToDataArray("language", ["english", "spanish", "chineese"],[59, 62, 12]);
      this.addToDataArray( "age", ["18-21", "22-29", "30-39","40-49","50-59","60+"], [18, 22, 48, 21, 30, 4]);
      this.addToDataArray( "gender", ["male", "female"], [37, 49]);
      console.log(this.chartData);
      this.currChartData = this.chartDataArr[0];
      console.log("----------------------");
      console.log(this.currChartData);
      console.log("----------------------");
      this.chartData = {
         labels: this.getChartLabels(),
         datasets: [{
             label: this.getChartDataSetsLabel() + ' Distribution',
             data: this.getChartDataSetsData(),
             backgroundColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(54, 120, 235, 1)',
                 'rgba(205, 99, 132, 1)',
                 'rgba(200, 162, 235, 1)',
                 'rgba(55, 206, 86, 1)',
                 'rgba(54, 120, 105, 1)'
             ],
             borderWidth: 1
         }]
      }
      this.generateChart();
    } 

    */
   ngAfterViewInit() {};
}
