import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from "chart.js";
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
   graphChart: Chart;

   graphTypes: Array<string> = ['pie', 'bar', 'doughnut', 'polarArea'];
   graphDataFilters: Array<string> = ['age', 'language', 'gender', 'location', 'experience'];
   
   currentGraphData: GraphData;
   currentGraphType: string = 'polarArea';
      
   currentTopLevelFilter: string;
   currentSubLevelFilter: string;

   graphData: Array<GraphData>;

   chartData = {
      labels: ["A", "B", "C", "D"],
      datasets: [{
          label: '# of Votes',
          data: [1.2,2.5,3.1, 2.9],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(54, 120, 235, 1)'
          ],
          borderWidth: 1
      }]
   }

   chartOptions = {
      responsive: false,
    }

   private generateGraph(): void {
      this.graphChart = new Chart(this.ctx, {
         type: this.currentGraphType,
         data: this.chartData,
         options: this.chartOptions
      });

      
    }

   private updateGraphData(key:string): void {
      this.currentGraphData = this.getGraphDataFromKey(key);
      this.removeData(this.graphChart);
      this.addData(this.graphChart, this.currentGraphData.labels, this.currentGraphData.data);
   }

   private removeData(chart: Chart): void {
      chart.data.labels.pop();
      chart.data.datasets.forEach((dataset) => {
          dataset.data.pop();
      });
      chart.update();
   }

   private addData(chart, label, data) {)
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
         dataset.data.push(data);
      });
      chart.update();
   }

   private getGraphDataFromKey(key: string): GraphData {
      for (let i = 0; i < this.graphData.length; i++) {
         if (this.graphData[i].key === key) {
            return this.graphData[i];
         }
      }
   }

   private addToDataArray(key:string, labels:Array<string>, data:Array<number>): void {
      let gd = new GraphData(key, labels, data);
      this.graphData.push(gd);
   }


    private onChanges(): void {
      this.myForm.get('graphType').valueChanges.subscribe(val => {
        this.currentGraphType = val;
        console.log("Graph Type changed to: " + this.currentGraphType);
      });
      
      this.myForm.get('filterTopLevel').valueChanges.subscribe(val => {
         this.currentTopLevelFilter = val;
         console.log("Top Level changed to: " + this.currentTopLevelFilter);
       });
       
       this.myForm.get('filterSubLevel').valueChanges.subscribe(val => {
         this.currentSubLevelFilter = val;
         console.log("Sub Level changed to: " + this.currentSubLevelFilter);
       });
    }



    updateTopFilter(filter: string) {
       this.currentTopLevelFilter = filter;
       this.updateGraphData();
    }

    updateSubFilter(filter: string) {
      this.currentSubLevelFilter = filter;
   }



   ngOnInit() {
      this.myForm = new FormGroup({
         graphType : new FormControl(this.graphTypes[0]),
         filterTopLevel : new FormControl(this.graphDataFilters[0]),
         filterSubLevel : new FormControl(this.graphDataFilters[1])
      });

      this.addToDataArray("language", ["english", "spanish", "chineese"],[59, 62, 12]);
      this.addToDataArray( "age", ["18-21", "22-29", "30-39","40-49","50-59","60+"], [18, 22, 48, 21, 30, 4]);
      this.addToDataArray( "gender", ["male", "female"], [37, 49]);

      this.onChanges();
   }

    ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');   
      this.generateGraph();
      this.onChanges();
    } 
   
   // this.addToDataArray("language", ["english", "spanish", "chineese"],[59, 62, 12]);
    
}
