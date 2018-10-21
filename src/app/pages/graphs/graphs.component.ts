import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { FormGroup, FormControl } from '@angular/forms';


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
   
   currentGraphType: string = 'doughnut';

   chartData = {
      labels: ["A", "B", "C", "D"],
      datasets: [{
          label: '# of Votes',
          data: [1,2,3,4],
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
      responsive: false
    }

   private generateGraph(): void {
      this.graphChart = new Chart(this.ctx, {
         type: this.currentGraphType,
         data: this.chartData,
         options: this.chartOptions
       });
    }

    private onChanges(): void {
      this.myForm.get('graphType').valueChanges.subscribe(val => {
        this.currentGraphType = val;
      });
      
      this.myForm.get('filterTopLevel').valueChanges.subscribe(val => {
         this.currentGraphType = val;
       });
       
       this.myForm.get('filterSubLevel').valueChanges.subscribe(val => {
         this.currentGraphType = val;
       });
    }


   ngOnInit() {
      this.myForm = new FormGroup({
         graphType : new FormControl(this.graphTypes[0]),
         filterTopLevel : new FormControl(this.graphDataFilters[0]),
         filterSubLevel : new FormControl(this.graphDataFilters[1])
      });
      this.onChanges();
      
   }

    ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');   
      this.generateGraph();
    } 
   
    
}
