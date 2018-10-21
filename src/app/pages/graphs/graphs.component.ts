import { Component, AfterViewInit } from '@angular/core';
//import { Chart } from "../../../../node_modules/@types/chart.js";
import { Chart } from "chart.js";

@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
})
export class GraphsComponent implements AfterViewInit {

   title = "Graphs";
   subtitle = "Gonna make some nice graphs";
   count = 0;

   addCount() {
      this.count++;
   }

   canvas: any;
   ctx: any;

   ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');
      let myChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: ["New", "In Progress", "On Hold"],
            datasets: [{
                label: '# of Votes',
                data: [1,2,3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false
        }
      });
    }
   
    
}
