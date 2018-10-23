import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart, ChartDataSets } from "chart.js";
import { FormGroup, FormControl } from '@angular/forms';
import { GraphData } from './graphData.component';
import { runInThisContext } from 'vm';


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
   }

   ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');  
      this.initChart();

   };

   // Data Filters/Form Group
   chartFiltersForm: FormGroup;
   chartDataFilters: string[];
   chartTypes: Array<string> = ['pie', 'bar', 'doughnut', 'polarArea'];

   //Canvas
   canvas: any;
   ctx: any;

   //Chart Object
   chart: Chart;

   //Chart Data (Initialize it here with a length of 1 so don't get undefined error)
   chartDataArr: Array<GraphData> = new Array(1);

   //Current Chart Settings
   currChartType: string;
   currDataFilterTopLevel: string;
   currDataFilterSubLevel: string;
   
   chartOptions = {
      responsive: false,
   }

   updateTopFilter(filter: string) {
      if (this.currDataFilterTopLevel != filter) {
         this.currDataFilterTopLevel = filter;
         //this.updateChart();
         console.log(this.currDataFilterTopLevel);
         this.updateChartData();
      }
   }

   updateSubFilter(filter: string) {
      if (this.currDataFilterSubLevel != filter) {
         this.currDataFilterSubLevel = filter;
         //this.updateChart();
         console.log(this.currDataFilterSubLevel);
      }
  }

  updateChartType(chartType: string) {
      if (this.currChartType != chartType) {
         this.currChartType = chartType;
         //this.updateChart();
         console.log(this.currChartType);
      }
  }
   
   private getDataFilters(): string[] {
      return ['age', 'language', 'gender', 'location', 'experience'];
   }

   private initChart(): void {
      this.chart = new Chart(this.ctx, {
         type: 'bar',
         data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
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

   private addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
         dataset.data.push(data);
      });
      chart.update();
   }

   private removeData(chart) {
      console.log("About to pop remove data...");
      console.log("...Data Before" + chart.data.datasets);
      chart.data.labels.pop();
      chart.data.datasets.forEach((dataset) => {
         dataset.data.pop();
      });
      console.log("...Data After " + chart.data.datasets);
      chart.update();
   }

   private updateChartData(): void {
      let gd = this.getGraphDataFromDataArray(this.currDataFilterTopLevel);
      //this.removeData(this.chart);
      //this.addData(this.chart, gd.labels, gd.data);
      this.chart.data.datasets[0].data =  gd.data;
      for(let i = 0; i < gd.labels.length; i++) {
         this.chart.data.labels[i] = gd.labels[i];
      }

      this.chart.update();
   }

   
/*
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


   addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
         dataset.data.push(data);
      });
      chart.update();
   }

   removeData(chart) {
      chart.data.labels.pop();
      chart.data.datasets.forEach((dataset) => {
         dataset.data.pop();
      });
      chart.update();
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
}
