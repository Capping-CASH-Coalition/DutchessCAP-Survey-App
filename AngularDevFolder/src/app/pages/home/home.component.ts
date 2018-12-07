import { OnInit, Component, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { GraphService } from '../../services/graph.service';
import { SurveyService } from 'app/services/survey.service';
import { Survey } from '../../models/survey.model';
import { Question } from '../../models/question.model';
import { ResponseExport } from '../../models/responseExport.model';

@Component({
   selector: 'home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
   providers: [SurveyService]
})

export class HomeComponent implements OnInit, AfterViewInit {
   
   canvas: any;
      // canvas context
   ctx: any;
      // chart object
   chart: Chart = null;
      // Holds the dynamic survey variables for display
   surveys: Array<any> = [];
      // Forces home page to wait on the get calls to the database
   showHomeDiv: boolean = false;
      // Forces home page to wait on the get calls to the database
   showInfo: boolean = false;
      // Holds the survey details to determine if survey is active
   surveyDetails: Array<Survey> = [];
      // Used to keep track 
   currSurveyIndex: number = 0;
      // 
   modal;

   constructor (public graphService: GraphService,
               public surveyService: SurveyService,
               private changeref: ChangeDetectorRef) { }


   ngOnInit() {
      // Get the modal
      this.modal = document.getElementById('success');
      // get the canvas
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');
     
      this.surveyService.getAllSurveys().subscribe((response) => {
         // Get 1 survey at a time and push into surveys array
         for (let i = 0; i < response.body.length; i++) {
               let survey: Survey = {
                     "survey_id": response.body[i].survey_id,
                     "survey_name": response.body[i].survey_name,
                     "date_created": response.body[i].date_created.split(" ")[0],
                     "survey_is_active": response.body[i].survey_is_active,
                     "response_count": response.body[i].response_count
               };
               this.surveyDetails.push(survey);
               this.surveys.push(survey);
               // Get the survey questions by selectedSurveyId
               this.surveyService.getAllSurveyQuestions(this.surveys[i].survey_id).subscribe((response)=>{
                     // Initialize the questions
                     this.surveys[i].questions = [];
                     // Iterate through the questions and push them one at a time
                     for (let j = 0; j < response.body.length; j++) {
                           let question: Question = {
                                 "question_id": response.body[j].question_id,
                                 "question_text": response.body[j].question_text,
                                 "question_type": response.body[j].question_type,
                                 "question_is_active": response.body[j].question_is_active,
                                 options: [],
                                 responses: []
                           };
                           this.surveys[i].questions.push(question);
                     }                     
                        // Manually detect changes as the page will load faster than the async call
                        this.changeref.detectChanges();
                        this.surveyService.getSurveyResponses(this.surveys[i].survey_id).subscribe((response) => {
                           for (let k = 0; k < this.surveys[i].questions.length; k++) {
                                 for (let l = 0; l < response.body.length; l++) {
                                       let responseData: ResponseExport = {
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
                                             this.surveys[i].questions[k].responses.push(responseData);
                                       }
                                 }
                              }
                           // Manually detect changes as the page will load faster than the async call
                           this.changeref.detectChanges();
                           if(i == this.surveys.length -1){
                              this.showHomeDiv = true;
                              this.showInfo = true;
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
      // update chart after .75 seconds have passed to allow for all the data to be retrieved
      setTimeout(() => {this.updateChart();}, 750);
   };

   // Updates survey, changing it's active status
   updateActiveSurvey(): void {
      let survey = {
         "survey_id": this.surveyDetails[this.currSurveyIndex].survey_id,
         "survey_is_active": this.surveyDetails[this.currSurveyIndex].survey_is_active
      }
      // Checks if survey is currently active
      if(this.surveyDetails[this.currSurveyIndex].survey_is_active){
         this.surveyDetails[this.currSurveyIndex].survey_is_active = false;
         survey.survey_is_active = false;
         this.surveyService.updateSurveyActive(survey).subscribe();
      }
      // Checks if survey is currently inactive
      else {
         this.surveyDetails[this.currSurveyIndex].survey_is_active = true;
         survey.survey_is_active = true;
         this.surveyService.updateSurveyActive(survey).subscribe();
      }
      // closes the modal
      this.modal.style.display = "none";
      window.location.reload();
   }

   // Builds chart with survey date data
   updateChart(): void {
      this.destroyChart();
      let c: Chart = this.graphService.createDateChart(this.ctx, "line", this.dateGraphData())
      this.buildChart(c)
      }
   // destroys chart if a chart is already there(for refresh button)
   private destroyChart(): void {
      if (this.chart != null) {
            this.chart.destroy();
      }
   }

   // builds the chart
   private buildChart(chartData: Chart): void {
      this.chart = chartData;
      this.chart.update();
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

   // Push all the surveys information into a datasets array and return it for chart creation
   dateGraphData(): any {
      let dataset: any[] = new Array();
      for(let index = 0; index < this.surveys.length; index++){
         // push the dataset values
         dataset.push({
            label: this.surveys[index].survey_name,
            data: this.pushDateDataBySurvey(index),
            backgroundColor: this.graphService.getColorByIndex(index, 'date'),
            borderColor: this.graphService.getColorByIndex(index, 'date'),
            fill: false
         })
      };
      return {
         datasets: dataset,
      }
   }

   // Sets the date taken and submit count for each date taken for each survey
   pushDateDataBySurvey(surveyIndex): any[] {
      let data: any[] = new Array();
      // Push the values with the labels to the data array
      for(let r=0; r <= this.surveys[surveyIndex].questions[0].responses.length; r++){
         data.push({
            // the date.taken text for each response on a given date taken
            x: Array.from(this.mapDateData(surveyIndex).keys())[r],
            // the count for amount of surveys taken on each date.taken
            y: Array.from(this.mapDateData(surveyIndex).values())[r]
         })
      }
      // returns data to the datasets
      return data;
   }
   
   // Map a surveys dates and count how much surveys were taken per that date
   mapDateData(surveyIndex): Map<string, number> {
      let map = new Map();
      // makes sure the question is part of current survey
      let questionIndex = 0;
      // Maps each survey separately to be able to display on the same graphs
      this.surveys[surveyIndex].questions.forEach(question => {
         // Used to increment question index if current question is not a checkbox
         let questionId = this.surveys[surveyIndex].questions[questionIndex].question_id;
         // confirms that the question is active and not a checkbox
         if (question.question_id == questionId && question.question_type != "checkbox" && question.question_is_active == true) {
            question.responses.forEach(r => {
               // checks to make sure to only grab responses from the last year
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
         // Increments the index if current question was a checkbox or inactive
         else{
            questionIndex++;
         }
      });
      return map;
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
      // puts the date from a year ago into date format
      let yearago = new Date(yyyy + '-' + mm + '-' + dd);
      // reaturns the date to check against the date.taken of each submission
      return yearago;
   }  

   // When user clicks save survey, display modal
   openModal(id): void {
      this.currSurveyIndex = id - 1;
      this.modal.style.display = "block";
   }

   // When user clicks X, close the modal and refresh the page to see changes
   closeModal(): void {
      this.modal.style.display = "none";
   }
}