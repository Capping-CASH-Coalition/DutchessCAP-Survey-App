import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
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

   // global to track which switch for the dataset
   currentDatasetType: string = 'single';
   // form for the chart filters
   chartForm: FormGroup;
   // sub form specifically for the matrix options
   optionsForm: FormGroup;
   // canvas id holder
   canvas: any;
   // canvas context
   ctx: any;
   // chart object
   chart: Chart = null;
   // contains the selected options
   selectedOptions: string[];

   ngOnInit() {
      // init the chart form
      this.initChartForm();
      // init the options form
      this.initOptionsForm();
      // grab the updated selected options
      this.updateSelectedOptions();
   }

   // after the HTML has loaded, init graph elements
   ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.updateChart();
   };

   // init chart form
   initChartForm() {
      this.chartForm = this.fb.group({
         chartType: new FormControl('pie'),
         surveyId: new FormControl('0'),
         questionId: new FormControl('0'),
         subQuestionId: new FormControl('1')
      });
   }

   // set the single state button to disabled or not disabled
   buttonStateSingle(): boolean {
      return this.currentDatasetType == 'single' ? true : false;
   }
   // set the multiple state button to disabled or not disabled
   buttonStateMultiple(): boolean {
      return this.currentDatasetType == 'multiple' ? true : false;
   }
   // init the options with the subquestion id appropiately 
   initOptionsForm() {
      const controls = this.getSubQuestionOptions().map(o => new FormControl(false));
      controls[0].setValue(true); // Set the first checkbox to true (checked)
      this.optionsForm = this.fb.group({
         options: new FormArray(controls)
      });
   }

   // map the dataset for an individual dataset graph
   mapSingleData(): Map<string, number> {
      let map = new Map();
      let survey = this.globals.surveys[this.chartForm.controls.surveyId.value];
      survey.questions.forEach(question => {
         // for each question, if the question id equals the one in the select value
         if (question.question_id == this.chartForm.controls.questionId.value) {
            // for each response of the question
            question.responses.forEach(r => {
               // if the dataset has the response text/answer: get the count and increase and set back
               if (map.has(r.response_text)) {
                  let count = map.get(r.response_text);
                  // increment count by 1
                  count += 1;
                  map.set(r.response_text, count);
               }
               // if the dataset does not have the response, it is the first time seeing it so set with value of 1
               else {
                  map.set(r.response_text, 1);
               }
            });
         }
      });
      return map;
   }

   // used when a change happens to update the chart
   updateChart(): void {
      // if the switch is on single, destroy the chart, get the new data, build it using graph service
      if (this.currentDatasetType === 'single') {
         let map: Map<string, number>;
         this.destroyChart();
         map = this.mapSingleData();
         this.buildChart(this.graphService.createSingleChart(this.ctx, this.chartForm.controls.chartType.value, map));
      }
      // if the switch is on multiple, destroy the chart, create new Chart from graph service, build it
      else {
         this.updateSelectedOptions();
         console.log("Matrix selected");
         this.destroyChart();
         let c: Chart = this.graphService.createMatrixChart(this.ctx, this.chartForm.controls.chartType.value, this.matrixGraphData())
         this.buildChart(c)

      }
   }


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
      // go through the checkboxes that are selected
      this.selectedOptions.forEach((o, index) => {
         // dsMap contains all the top question options labels with values 0
         let dsMap = this.initMatrixLabelsMap();
         // Sub question responses loop
         this.globals.surveys[this.chartForm.controls.surveyId.value].questions.forEach(sq => {
            if (sq.question_id == this.chartForm.controls.subQuestionId.value) {
               // loop through all the sub question responses
               sq.responses.forEach(r => {
                  // question map has hash id key of this response
                  if (questionMap.has(r.hash_id)) {
                     // key for new 'map'
                     let k = questionMap.get(r.hash_id);
                     // if the resonse text equals the option then it coorelates
                     if (r.response_text == o) {
                        // make sure that the dataset map has the key
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
         // push the dataset values
         datasets.push({
            label: o,
            data: Array.from(dsMap.values()),
            backgroundColor: this.graphService.getColorByIndex(index)
         })
      });
      return datasets;
   }

   // pulls together the above functions to set the labels and datasets for the matrix graph
   matrixGraphData(): any {
      return {
         labels: Array.from(this.initMatrixLabelsMap().keys()),
         datasets: this.mapMatrixDataSets()
      }
   }

   // update the dataset switch to single or multiple
   updateMultipleDataSetForm(val) {
      this.currentDatasetType = val;
   }

   // get the options of the sub questions with active options
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

   // build the chart from the Chart data and update it on the canvas
   private buildChart(chartData: Chart): void {
      this.chart = chartData;
      this.chart.update();
   }

   // destroy the chart if it is not null
   private destroyChart(): void {
      if (this.chart != null) {
         this.chart.destroy();
      }
   }

   // use graph service to download the chart given an event
   download(event) {
      this.graphService.downloadChart(event, 'canvas');
   }

   // update the selected options to only be the checked ones
   updateSelectedOptions() {
      const options = this.getSubQuestionOptions()
      this.selectedOptions = this.optionsForm.value.options
         .map((v, i) => v ? options[i].option_text : null)
         .filter(v => v !== null);
   }


   graphOptionsModal(): void {
      jQuery('#myModal').on('shown.bs.modal', function () {
         jQuery('#myInput').trigger('focus')
       })
   }


}