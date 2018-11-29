import { OnInit, Component, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Globals } from "../../globals";
import { GraphService } from '../../services/graph.service';
import { SurveyService } from 'app/services/survey.service';
import { SurveyInfo } from '../../models/surveyInfo.model';
import { Question } from '../../models/question.model';
import { Option } from '../../models/option.model';
import { Responses } from '../../models/responseExport.model';

@Component({
   selector: 'home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
   providers: [SurveyService]
})
export class HomeComponent implements OnInit {
   constructor(
      public globals: Globals,
      public graphService: GraphService,
      public surveyService: SurveyService,
      private changeref: ChangeDetectorRef 
   ){ }

   canvas: any;
      // canvas context
   ctx: any;
      // chart object
   chart: Chart = null;
      // Holds the dynamic survey variables for display
   surveys: Array<any> = [];
   showHomeDiv: boolean = false;
   showInfo: boolean = false;

   ngOnInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.surveyService.getSurveys().subscribe((response) => {
         // Get 1 survey at a time and push into surveys array
         for (let i = 0; i < response.body.length; i++) {
               let survey: SurveyInfo = {
                     "survey_id": response.body[i].survey_id,
                     "survey_name": response.body[i].survey_name,
                     "date_created": response.body[i].date_created.split(" ")[0],
                     "survey_is_active": response.body[i].survey_is_active
               };
 
               this.surveys.push(survey);
               // Get the survey questions by selectedSurveyId
               this.surveyService.getSurveyQuestions(this.surveys[i].survey_id).subscribe((response)=>{
                     // Initialize the questions
                     this.surveys[i].questions = [];
                     // Iterate through the questions and push them one at a time
                     for (let j = 0; j < response.body.length; j++) {
                           let question: Question = {
                                 "question_id": response.body[j].question_id,
                                 "question_text": response.body[j].question_text,
                                 "question_type": response.body[j].question_type,
                                 "question_is_active": response.body[j].question_is_active,
                                 options: []
                           };
                           this.surveys[i].questions.push(question);
                     }
                  
                        // Manually detect changes as the page will load faster than the async call
                        this.changeref.detectChanges();
                        this.surveyService.getSurveyResponses(this.surveys[i].survey_id).subscribe((response) => {
                           
                           for (let k = 0; k < this.surveys[i].questions.length; k++) {
                              // initialize the responses
                              this.surveys[i].questions[k].responses = [];
                                 for (let l = 0; l < response.body.length; l++) {
                                       let response1: Responses = {
                                             "response_id": response.body[l].response_id,
                                             "survey_id": response.body[l].survey_id,
                                             "question_id": response.body[l].question_id,
                                             "option_id": response.body[l].option_id,
                                             "response_text": response.body[l].response_text,
                                             "date_taken": response.body[l].date_taken.split(" ")[0],
                                             "survey_hash": response.body[l].survey_hash
                                       };
                                       // If the question IDs match, push the response into the questions[j].responses array
                                       if (this.surveys[i].questions[k].question_id == response.body[l].question_id) {
                                             this.surveys[i].questions[k].responses.push(response1);
                                       }
                                 }
                           }
                           
                           // Manually detect changes as the page will load faster than the async call
                           this.changeref.detectChanges();
                           if(i == this.surveys.length -1){
                           this.showHomeDiv = true;
                           this.showInfo = true;
                           this.updateChart();
                           }
                     }, (error) => {
                           console.log('error is ', error)
                     })
               
                     // Manually detect changes as the page will load faster than the async call
                     this.changeref.detectChanges();
               },(error) => {
                     console.log('error is ', error)
               })
               // Manually detect changes as the page will load faster than the async call
               this.changeref.detectChanges();
            } 
         }, (error) => {
            console.log('error is ', error)
      })
   }

   ngAfterViewInit() {
   };

   // Updates survey, changing it's active status
   updateActiveSurvey(val): void {
      // Checks if survey is currently active
      if(this.surveys[val].survey_is_active == true){
         if(confirm("Are you sure you want to change the survey to inactive?")){
         this.surveys[val].survey_is_active = false;
            let survey = {
               "survey_id": this.surveys[val].survey_id,
               "survey_is_active": this.surveys[val].survey_is_active
            }
         this.surveyService.updateSurveyActive(survey).subscribe();
         }
      }
      // Checks if survey is currently inactive
      else if(this.surveys[val].survey_is_active == false){
         if(confirm("Are you sure you want to change the survey to active?")){
         this.surveys[val].survey_is_active = true;
            let survey = {
               "survey_id": this.surveys[val].survey_id,
               "survey_is_active": this.surveys[val].survey_is_active
            }
         this.surveyService.updateSurveyActive(survey).subscribe();
         }
      }
   }

   // Builds chart with survey date data
   updateChart(): void {
      this.destroyChart();
      let c: Chart = this.graphService.createDateChart(this.ctx, "line", this.DateGraphData())
      this.buildChart(c)
      }

   private destroyChart(): void {
      if (this.chart != null) {
            this.chart.destroy();
      }
   }

   // go through the surveys and get the info for the survey details card
   getSurveyInfo(): any[] {
      let surveyDetails: any[] = [];
      this.surveys.forEach(survey => {
         let submissionCount = 0;
         // get the number of responses on each question of the survey
         survey.questions.map(q => { submissionCount += q.responses.length });
         // push details to array
         surveyDetails.push({
            survey_id: survey.survey_id,
            name: survey.survey_name,
            date: survey.date_created,
            status: survey.survey_is_active,
            // round down the operation of the the total submissions divided by the number of questions, parse to string for formatting
            submissions: Math.round(submissionCount / survey.questions.length).toLocaleString(),
         })
      });
      return surveyDetails;
   }

   private buildChart(chartData: Chart): void {
      this.chart = chartData;
      this.chart.update();
   }
   
   // Map a surveys dates and count how much surveys were taken per that date
   mapDateData(val): Map<string, number> {
      let map = new Map();
      let survey = this.surveys[val];
      let qid = survey.questions[0].question_id;
      survey.questions.forEach(question => {
         if (question.question_id == qid) {
            question.responses.forEach(r => {
               let testdate = new Date(r.date_taken);
               if (testdate >= this.getDateYearAgo()){
                  if (map.has(r.date_taken)) {
                     let count = map.get(r.date_taken);
                     // increment count by 1
                     count += 1;
                     map.set(r.date_taken, count);
                  }
                  else {
                     map.set(r.date_taken, 1);
                  }
               }
            });
         }
      });
      return map;
   }
   
   // Push all the surveys information into a datasets array
   mapDateDataSets(): any[] {
      let datasets: any[] = new Array();
         for(let v = 0; v < this.surveys.length; v++){
            // push the dataset values
            datasets.push({
               label: this.surveys[v].survey_name,
               data: this.mapDataForSurvey(v),
               backgroundColor: this.graphService.getColorByIndex(v),
               borderColor: this.graphService.getColorByIndex(v),
               fill: false
            })
         };
      return datasets;
   }

   // Push all the current surveys date data to data array
   mapDataForSurvey(val): any[] {
      let data: any[] = new Array();
      let a = Array.from(this.mapDateData(val).keys());
      let b = Array.from(this.mapDateData(val).values());

      let survey = this.surveys[val];

      // Push the values with the labels to the datasets
      for(let r=0; r <= survey.questions[0].responses.length; r++){
         data.push({
            x: a[r],
            y: b[r]
         })

      }
      return data
   }


   // pulls together the above functions to set the labels and datasets for the matrix graph
   DateGraphData(): any {
      return {
         datasets: this.mapDateDataSets()
      }
   }

   // Get date from exactly one year ago to make sure that only surveys taken in the past year are graphed
   private getDateYearAgo(): any {
      let today = new Date();
      let d = today.getDate();
      let m = today.getMonth() + 1;
      let yyyy = today.getFullYear() - 1;
      let mm: string;
      let dd: string;
      if(d < 10) {
         dd = '0' + d;
      }
      else{
         dd = '' + d;
      }
      if(m < 10) {
         mm = '0' + m;
      }
      else{
         mm = '' + m;
      }
      let today1 = new Date(yyyy + '-' + mm + '-' + dd);
      return today1;
   }
   
}