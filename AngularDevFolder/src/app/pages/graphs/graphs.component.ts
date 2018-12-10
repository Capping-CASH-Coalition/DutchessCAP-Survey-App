import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { GraphService } from '../../services/graph.service'
import { Response } from '../../models/response.model';
import { SurveyService } from '../../services/survey.service';
import { QuestionResponses } from '../../models/questionResponses.model';
import { Option } from '../../models/option.model';
import { Survey } from '../../models/survey.model';
import { Router } from '@angular/router';

@Component({
   selector: 'app-graphs',
   templateUrl: './graphs.component.html',
   styleUrls: ['./graphs.component.css']
})

export class GraphsComponent implements OnInit {

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
   // hold off on displaying div until this is true after data loaded
   displayDiv = false;
   // Holds the dynamic survey variables for display
   surveys: Array<Survey> = [];
   // sub question options global
   subQuestionOptions: any[] = [];

  constructor(  public router: Router,
                public graphService: GraphService,
                private changeref: ChangeDetectorRef,
                public surveyService: SurveyService,
                private fb: FormBuilder) { };

  ngOnInit(): void {
      //Check if the user has authentication to use this page
      this.hasAuthentication();
      // init the chart form
      this.initChartForm();
      // get the surveys and populated inner fields with inner get calls
      this.surveyService.getAllSurveys().subscribe(response => {
         // Get 1 survey at a time and push into surveys array
         for (let i = 0; i < response.body.length; i++) {
            let survey: Survey = {
               "survey_id": response.body[i].survey_id,
               "survey_name": response.body[i].survey_name,
               "date_created": response.body[i].date_created,
               questions: []
            };
            this.surveys.push(survey);
            // Manually detect changes as the page will load faster than the async call
            this.changeref.detectChanges();
            // Get the survey questions by selectedSurveyId
            this.surveyService.getAllSurveyQuestions(this.surveys[i].survey_id).subscribe(response => {
               // Initialize the questions
               this.surveys[i].questions = [];
               // Iterate through the questions and push them one at a time
               for (let j = 0; j < response.body.length; j++) {
                  let question: QuestionResponses = {
                     "question_id": response.body[j].question_id,
                     "question_text": response.body[j].question_text,
                     "question_type": response.body[j].question_type,
                     "question_is_active": response.body[j].question_is_active,
                     options: [],
                     responses: []
                  };
                  //this.surveys[i].questions.push(question);
                  this.surveys[i].questions.push(question);
                  // Manually detect changes as the page will load faster than the async call
                  this.changeref.detectChanges();
               }

               // Get the survey options based on the selectedSurveyId
               this.surveyService.getAllSurveyOptions(this.surveys[i].survey_id).subscribe(response => {
                  for (let k = 0; k < this.surveys[i].questions.length; k++) {
                     for (let l = 0; l < response.body.length; l++) {
                        let option: Option = {
                           "option_id": response.body[l].option_id,
                           "option_text": response.body[l].option_text,
                           "option_is_active": response.body[l].option_is_active,
                           "question_id": response.body[l].question_id
                        };
                        // If the question IDs match, push the option into the questions[j].options array
                        if (this.surveys[i].questions[k].question_id == response.body[l].question_id) {
                           this.surveys[i].questions[k].options.push(option);
                           // Manually detect changes as the page will load faster than the async call
                           this.changeref.detectChanges();
                        }
                     }
                  }
                  // Manually detect changes as the page will load faster than the async call
                  this.changeref.detectChanges();

                  // Get the survey responses based on the selectedSurveyId
                  this.surveyService.getSurveyResponses(this.surveys[i].survey_id).subscribe(response => {

                     for (let m = 0; m < this.surveys[i].questions.length; m++) {
                        for (let n = 0; n < response.body.length; n++) {
                           let responseData: Response = {
                              "question_id": response.body[n].question_id,
                              "survey_id": response.body[n].survey_id,
                              "option_id": response.body[n].option_id,
                              "response_text": response.body[n].response_text,
                              "survey_hash": response.body[n].survey_hash
                           };
                           // If the question IDs match, push the response into the questions[j].response array
                           if (this.surveys[i].questions[m].question_id == response.body[n].question_id) {
                              this.surveys[i].questions[m].responses.push(responseData);
                              // Manually detect changes as the page will load faster than the async call
                              this.changeref.detectChanges();
                           }
                        }
                     }
                     // Manually detect changes as the page will load faster than the async call
                     this.changeref.detectChanges();
                     //if (i == this.surveys.length - 1) {
                        // set the display to be true after the page has loaded
                        this.displayDiv = true;
                        // init the options form
                        this.initOptionsForm();
                        // grab the updated selected options
                        this.updateSelectedOptions();
                        // html canvas elemnt to context that ChartJS can work with
                        this.canvas = document.getElementById('graphCanvas');
                        this.ctx = this.canvas.getContext('2d');
                        // update the chart visually
                        this.updateChart();

                   //  }

                  }, (error) => {
                     console.log('error is ', error)
                  })
                  // Manually detect changes as the page will load faster than the async call
                  this.changeref.detectChanges();

               }, (error) => {
                  console.log('error is ', error)
               })
               // Manually detect changes as the page will load faster than the async call
               this.changeref.detectChanges();

            }, (error) => {
               console.log('error is ', error)
            })
            // Manually detect changes as the page will load faster than the async call
            this.changeref.detectChanges();
         }
         // Manually detect changes as the page will load faster than the async call
         this.changeref.detectChanges();

      }, (error) => {
         console.log('error is ', error)
      })

  }

   hasAuthentication(): void {
      if (localStorage.getItem('login') != 'success') {
        this.router.navigate(['/survey']);
      }
    }

   // init chart form
   initChartForm(): void {
      this.chartForm = this.fb.group({
         chartType: new FormControl('pie'),
         surveyId: new FormControl('1'),
         questionId: new FormControl('1'),
         subQuestionId: new FormControl('2')
      });
   }

   // init the options with the subquestion id appropiately 
   initOptionsForm(): void {
      const controls = this.getSubQuestionOptions().map(o => new FormControl(false));
      this.optionsForm = this.fb.group({
         options: new FormArray(controls)
      });
   }

   // get the options of the sub questions with active options
   getSubQuestionOptions(): any[] {
      let sid: number = this.chartForm.controls.surveyId.value;
      let qid: number = this.chartForm.controls.subQuestionId.value;
      let opsReturn;
      this.surveys[sid - 1].questions.forEach(q => {
         if (q.question_id == qid) {
            opsReturn = q.options
               .filter((option: any) => option.option_is_active === true);
         }
      });
      return opsReturn;
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
         this.destroyChart();
         let c: Chart = this.graphService.createMatrixChart(this.ctx, this.chartForm.controls.chartType.value, this.matrixGraphData())
         this.buildChart(c);
      }
   }

   // update the options being listed
   updateSubQuestionOptions(): void {
      // resets the options form to be all false when a new question is selected
      this.initOptionsForm();
   }

   // map the dataset for an individual dataset graph
   mapSingleData(): Map<string, number> {
      let map = new Map();
      let survey = this.surveys[this.chartForm.controls.surveyId.value - 1];
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

   // update the selected options to only be the checked ones
   updateSelectedOptions(): void {
      const options = this.getSubQuestionOptions()
      this.selectedOptions = this.optionsForm.value.options
         .map((v, i) => v ? options[i].option_text : null)
         .filter(v => v !== null);
   }


   mapTopLevelFilter(): Map<string, string> {
      let responseMap: Map<string, string> = new Map();
      this.surveys[this.chartForm.controls.surveyId.value - 1].questions.forEach(q => {
         if (q.question_id == this.chartForm.controls.questionId.value) {
            q.responses.map(r => responseMap.set(r.survey_hash, r.response_text));
         }
      });
      return responseMap;
   }

   ///Matrix label map 
   initMatrixLabelsMap(): Map<string, number> {
      let labelMap: Map<string, number> = new Map();
      this.surveys[this.chartForm.controls.surveyId.value - 1].questions.forEach(q => {
         if (q.question_id == this.chartForm.controls.questionId.value) {
            // on every option, if the option is active, add to the label map, if not active then nothing happens
            q.options.map(o => o.option_is_active ? labelMap.set(o.option_text, 0) : null);
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
         this.surveys[this.chartForm.controls.surveyId.value - 1].questions.forEach(sq => {
            if (sq.question_id == this.chartForm.controls.subQuestionId.value) {
               // loop through all the sub question responses
               sq.responses.forEach(r => {
                  // question map has hash id key of this response
                  if (questionMap.has(r.survey_hash)) {
                     // key for new 'map'
                     let k = questionMap.get(r.survey_hash);
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
         let color = this.graphService.getColorByIndex(index, this.chartForm.controls.chartType.value);
         datasets.push({
            label: o,
            data: Array.from(dsMap.values()),
            backgroundColor: color,
            fill: this.chartForm.controls.chartType.value != 'line' ? true : false,
            borderColor: color
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
   download(event): void {
      this.graphService.downloadChart(event, 'canvas');
   }

   // set the single state button to disabled or not disabled
   buttonStateSingle(): boolean {
      return this.currentDatasetType == 'single' ? true : false;
   }
   // set the multiple state button to disabled or not disabled
   buttonStateMultiple(): boolean {
      return this.currentDatasetType == 'multiple' ? true : false;
   }

   // update the dataset switch to single or multiple
   updateMultipleDataSetForm(val): void {
      // if multiple datasets, set default to bar
      if (val == 'multiple') {
         this.chartForm.controls.chartType.setValue('bar');
      }
      // set the global value for current dataset type
      this.currentDatasetType = val;
      // update chart accordingly to filters
      this.updateChart();
   }
}
