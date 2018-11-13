import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart} from "chart.js";
import { FormBuilder, FormGroup, FormArray, FormControl, FormControlName } from '@angular/forms';
import { GraphData } from './graphData.component';
import { GraphService } from './graph.service'
import { Globals } from '../../globals';


@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.css']
})


export class GraphsComponent implements AfterViewInit, OnInit {
   
   constructor(
      private graphService: GraphService,
      private globals: Globals,
      private fb: FormBuilder,
   ){};

   currentDatasetType: string = 'single';
   chartForm: FormGroup;
   canvas: any;
   ctx: any;
   chart: Chart = null;

   ngOnInit() {
      this.initChartForm();
   }

   ngAfterViewInit() {
     this.canvas = document.getElementById('graphCanvas');
     this.ctx = this.canvas.getContext('2d');  
     this.updateChart();
   };

   mapSingleData(): Map<string, number> {
      let map = new Map();
      let survey = this.globals.surveys[this.chartForm.controls.surveyId.value];
      survey.questions.forEach(question => {
         if (question.question_id == this.chartForm.controls.questionId.value) {
            question.responses.forEach(r => {
               if ( map.has(r.response_text) ) {
                  let count = map.get(r.response_text);
                  count++;
                  map.set(r.response_text, count);
               }
               else {
                  map.set(r.response_text, 1);
               }
            });
         }
      });
      return map;
   }

   updateChart(): void {
      let map: Map<string, number>;
      if ( this.currentDatasetType === 'single') {
         map = this.mapSingleData();
      }
      this.destroyChart();
      this.buildChart(this.createSingleChart(map));
   }

   updateMultipleDataSetForm(val){
      this.currentDatasetType = val;
   }

   // will need to create methods to get surveyId, questionId, subQuestionId,
   initChartForm() {
      this.chartForm = this.fb.group({
         chartType: new FormControl('pie'),
         surveyId: new FormControl('0'),
         questionId: new FormControl('0'),
        // subQuestionId: new FormControl('1'),
        // subQuestionOptions: this.getSubQuestionOptions(this.chartForm.controls.subQuestionId.value)
      });
   }  

   getSubQuestionOptions(subQuestionId): FormArray {
      let ops = new FormArray([]);
      this.globals.surveys[this.chartForm.controls.surveyId.value].questions.forEach(question => {
         if (question.question_id === subQuestionId){
            question.options.forEach(o => {
               ops.push(this.fb.group({
                  option: new FormControl(o.option_text)
               }))
            });
         }
      });
      return ops;
   }

   createSingleChart(map: Map<string, number>): Chart {
      return new Chart(this.ctx, {
         type: this.chartForm.controls.chartType.value,
         data: {
            labels: Array.from(map.keys()),
            datasets: [{
               label: 'Total Distribution of Question Answers',
               data: Array.from(map.values()),
               backgroundColor: this.graphService.getColors()
            }]
         },
         options: this.graphService.getOptions()
      });
   }

   private buildChart(chartData: Chart): void {
      this.chart = chartData;
      this.chart.update();
   }

   private destroyChart(): void {
      if (this.chart != null) {
         this.chart.destroy();
      }
   }

   download(event) {
      this.graphService.downloadChart(event, 'canvas');
   }
   

}
