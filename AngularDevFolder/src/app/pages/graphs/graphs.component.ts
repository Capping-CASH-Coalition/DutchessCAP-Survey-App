import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { FormBuilder, FormGroup, FormArray, FormControl, FormControlName } from '@angular/forms';
import { GraphService } from '../../graph.service'
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
   selectedOptions: string[];

   ngOnInit() {
      this.initChartForm();
      this.initOptionsForm();
      this.updateSelectedOptions();
   }

   ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.updateChart();
   };

   initChartForm() {
      this.chartForm = this.fb.group({
         chartType: new FormControl('pie'),
         surveyId: new FormControl('0'),
         questionId: new FormControl('0'),
         subQuestionId: new FormControl('1')
      });
   }

   buttonStateSingle(): boolean {
      return this.currentDatasetType == 'single' ? true : false;
   }

   buttonStateMultiple(): boolean {
      return this.currentDatasetType == 'multiple' ? true : false;
   }

   initOptionsForm() {
      const controls = this.getSubQuestionOptions().map(o => new FormControl(false));
      controls[0].setValue(true); // Set the first checkbox to true (checked)
      this.optionsForm = this.fb.group({
         options: new FormArray(controls)
      });
   }

   // go back to account for disabled options and filter them out
   mapSingleData(): Map<string, number> {
      let map = new Map();
      let survey = this.globals.surveys[this.chartForm.controls.surveyId.value];
      survey.questions.forEach(question => {
         if (question.question_id == this.chartForm.controls.questionId.value) {
            question.responses.forEach(r => {
               if (map.has(r.response_text)) {
                  let count = map.get(r.response_text);
                  // increment count by 1
                  count += 1;
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
      if (this.currentDatasetType === 'single') {
         let map: Map<string, number>;
         this.destroyChart();
         map = this.mapSingleData();
         this.buildChart(this.graphService.createSingleChart(this.ctx, this.chartForm.controls.chartType.value, map));
      }
      else {
         this.updateSelectedOptions();
         console.log("Matrix selected");
         this.destroyChart();
         let c: Chart = this.graphService.createMatrixChart(this.ctx, this.chartForm.controls.chartType.value, this.matrixGraphData(this.chartForm.controls.chartType.value))
         this.buildChart(c)

      }
   }

   /**
    *  mapTopLevelFilter() => maps the top level filter of the current question.
    * @returns: map <hash_id, response_text>
    */
   mapTopLevelFilter(): Map<string, string> {
      let responseMap: Map<string, string> = new Map();
      this.globals.surveys[this.chartForm.controls.surveyId.value].questions.forEach(q => {
         if ( q.question_id == this.chartForm.controls.questionId.value ) {
            q.responses.map( r => responseMap.set(r.hash_id, r.response_text));
         }
      });
      return responseMap;
   }

   /** Matrix label map */
   initMatrixLabelsMap() : Map<string, number> {
      let labelMap: Map<string, number> = new Map();
      this.globals.surveys[this.chartForm.controls.surveyId.value].questions.forEach(q => {
         if ( q.question_id == this.chartForm.controls.questionId.value ) {
            // on every option, if the option is active, add to the label map, if not active then nothing happens
            q.options.map( o => o.option_active ? labelMap.set(o.option_text, 0) : null);
         }
      });
      return labelMap;
   }


   mapMatrixDataSets(): any[] {
      let questionMap: Map<string, string> = this.mapTopLevelFilter();
      let datasets: any[] = new Array();
   //   console.log(this.selectedOptions);
      // checkbox options loop
      this.selectedOptions.forEach((o, index) => {
      //   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      //   console.log("new option loop thru: ", o);
         // map contains all the top question options labels with values 0
         let dsMap = this.initMatrixLabelsMap();
      //   console.log("DSMAP BEFORE:", dsMap);
         // Sub question responses loop
         this.globals.surveys[this.chartForm.controls.surveyId.value].questions.forEach(sq => {
            if (sq.question_id == this.chartForm.controls.subQuestionId.value) {
               sq.responses.forEach(r => {
                  // question map has hash id key of this response
                  if (questionMap.has(r.hash_id)) {
                     // key for new 'map'
                     let k = questionMap.get(r.hash_id);
                  //   console.log("quesiton map has response hash id: ", r.hash_id);
                  //   console.log("quesiton map hash id value ", k);
                  //   console.log("sq response text :", r.response_text);
                     if (r.response_text == o) {
                        if (dsMap.has(k)) {
                           // get count in dataset map
                           let count = dsMap.get(k);
                           // increment count of coorelated data by 1
                           count += 1;
                           // set new count
                           dsMap.set(k, count);
                        }
                     }
                  } 
               });
            }
         });
         //console.log("DSMAP AFTER:", dsMap);
        // console.log("O text: ", o);
       //  console.log("data: ", Array.from(dsMap.values()));
         datasets.push({
            label: o,
            data: Array.from(dsMap.values()),
            backgroundColor: this.graphService.getColorByIndex(index)
         })
      });
      return datasets;
   }

   matrixGraphData(chartType): any {
      
      return {
         //labels: (chartType === 'bar' || chartType === 'line') ? Array.from(this.initMatrixLabelsMap().keys()) : this.selectedOptions,
         labels: Array.from(this.initMatrixLabelsMap().keys()),
         datasets: this.mapMatrixDataSets()
      }
   }

   updateMultipleDataSetForm(val) {
      this.currentDatasetType = val;
   }

   getSubQuestionOptions(): any[] {
      let sid: number = this.chartForm.controls.surveyId.value;
      let qid: number = this.chartForm.controls.subQuestionId.value;
      let opsReturn;
      this.globals.surveys[sid].questions.forEach(q => {
         if (q.question_id == qid) {
            opsReturn = q.options
               .filter((option: any) => option.option_active === true);
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


   updateSelectedOptions() {
      const options = this.getSubQuestionOptions()
      this.selectedOptions = this.optionsForm.value.options
         .map((v, i) => v ? options[i].option_text : null)
         .filter(v => v !== null);
   }



}