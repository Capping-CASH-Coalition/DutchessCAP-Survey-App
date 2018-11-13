import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from "chart.js";
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
   ) { };

   currentDatasetType: string = 'single';
   chartForm: FormGroup;
   optionsForm: FormGroup;
   canvas: any;
   ctx: any;
   chart: Chart = null;

   ngOnInit() {
      this.initChartForm();
      this.initOptionsForm();
   }

   ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.updateChart();
   };

   // go back to account for disabled options and filter them out
   mapSingleData(): Map<string, number> {
      let map = new Map();
      let survey = this.globals.surveys[this.chartForm.controls.surveyId.value];
      survey.questions.forEach(question => {
         if (question.question_id == this.chartForm.controls.questionId.value) {
            question.responses.forEach(r => {
               if (map.has(r.response_text)) {
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
      this.destroyChart();
      if (this.currentDatasetType === 'single') {
         map = this.mapSingleData();
         this.buildChart(this.graphService.createSingleChart(this.ctx, this.chartForm.controls.chartType.value, map));
      }
      else {

      }

   }

   updateMultipleDataSetForm(val) {
      this.currentDatasetType = val;
   }

   initChartForm() {
      this.chartForm = this.fb.group({
         chartType: new FormControl('pie'),
         surveyId: new FormControl('0'),
         questionId: new FormControl('0'),
         subQuestionId: new FormControl('1')
      });
   }

   initOptionsForm() {
      const controls = this.getSubQuestionOptions().map(o => new FormControl(false));
      controls[0].setValue(true); // Set the first checkbox to true (checked)
      console.log(controls);
      this.optionsForm = this.fb.group({
         options: new FormArray(controls)
      });
   }

   getSubQuestionOptions(): any[] {
      let sid: number = this.chartForm.controls.surveyId.value;
      let qid: number = this.chartForm.controls.subQuestionId.value;
      let opsReturn;
      this.globals.surveys[sid].questions.forEach(q => {
         if (q.question_id == qid) {
            opsReturn = q.options;
         }
      });
      return opsReturn;
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


   submit() {
      const options = this.getSubQuestionOptions()
      const selectedOrderIds = this.optionsForm.value.options
         .map((v, i) => v ? options[i].option_text : null)
         .filter(v => v !== null);

      console.log(selectedOrderIds);
   }



}
