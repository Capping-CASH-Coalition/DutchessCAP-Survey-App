import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { SurveyService } from 'app/services/survey.service';
import { Survey } from '../../models/survey.model';
import { Question } from '../../models/question.model';
import { Option } from '../../models/option.model';
import { ResponseExport } from '../../models/responseExport.model';

@Component({
   selector: 'app-exportRaw',
   styleUrls: ['./exportRaw.component.css'],
   templateUrl: './exportRaw.component.html',
   providers: [SurveyService]
})

export class ExportRawComponent implements OnInit {
   
   // datafeed that the table uses to populate data
   dataFeed: any[];
   // set the current survey and the date to filter by
   currSurvey: any;
   // Lower date limit for the survey date taken
   dateFilterStart: Date;
   // Upper date limit for the survey date taken
   dateFilterEnd: Date;
   // Holds the dynamic survey variables for display
   surveys: Array<any> = [];
   // used to determine if the survey name is readonly or not
   nameReadOnly: boolean;
   // hold off on displaying div until this is true after data loaded
   showExportDiv: boolean = false;

   constructor (public surveyService: SurveyService,
               private changeref: ChangeDetectorRef) { }

   // On component initialization, get the survey ids, names, and date created
   ngOnInit(): void {
      this.surveyService.getAllSurveys().subscribe((response) => {
         // Get 1 survey at a time and push into surveys array
         for (let i = 0; i < response.body.length; i++) {
               let survey: Survey = {
                     "survey_id": response.body[i].survey_id,
                     "survey_name": response.body[i].survey_name,
                     "date_created": response.body[i].date_created.split(" ")[0],
                     "survey_is_active": response.body[i].survey_is_active
               };
 
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
                                 options: []
                           };
                           this.surveys[i].questions.push(question);
                     }
                     
                     // Get the survey options based on the selectedSurveyId
                     this.surveyService.getAllSurveyOptions(this.surveys[i].survey_id).subscribe((response) => {

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
                                    }
                              }
                        }
                        // Manually detect changes as the page will load faster than the async call
                        this.changeref.detectChanges();
                     }, (error) => {
                           console.log('error is ', error)
                     })
                     // Get the survey responses based on the selectedSurveyID
                     this.surveyService.getSurveyResponses(this.surveys[i].survey_id).subscribe((response) => {
                           
                        for (let k = 0; k < this.surveys[i].questions.length; k++) {
                           this.surveys[i].questions[k].responses = [];
                              for (let l = 0; l < response.body.length; l++) {
                                    let response1: ResponseExport = {
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
                           this.showExportDiv = true;
                           // set the current survey to the first survey in the  globals
                           this.currSurvey = this.surveys[0];
                            // update the date value select to be the date created of the survey
                           this.updateDate(this.currSurvey.date_created);
                           // update the upper date limit with the current date
                           this.updateDateUpper(this.getDateToday());
                           // set the data feed to -1 which is all questions
                           this.updateDataFeed(-1);
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


   // sets the survey name to readonly based on the edit global
   setReadOnly(): boolean {
      return this.nameReadOnly;
   }


   // set the date filter global from the survey
   updateDate(date): void {
      this.dateFilterStart = date;
   }

   // set the upper date filter global from the survey
   updateDateUpper(date): void {
      this.dateFilterEnd = date;
   }

   // set the current survey from the given id 
   updateSurvey(id): void {
      this.currSurvey = this.surveys[id - 1];
      // get questions from the current survey
      this.getQuestions();
      // update feed to -1 which is all questions
      this.updateDataFeed(-1);
   }

   // get all the questions of the current survey, filtering out the inactive ones
   getQuestions(): string[] {
      return this.currSurvey.questions.filter(
         (question: any) =>
            question.question_is_active === true);
   }

   // updates the datafeed from a given question
   updateDataFeed(question_id: number): void {
      // clear the datafeed.
      this.dataFeed = [];
      // if the question = -1 then get all questions from the survey
      if (question_id == -1) {
         this.currSurvey.questions.forEach(question => {
            if (question.question_is_active) {
               question.responses.forEach(response => {
                  this.dataFeed.push({
                     question: question.question_text,
                     question_id: question.question_id,
                     response: response.response_text,
                     date_taken: response.date_taken
                  })
               });
            }
         });
      }
      // otherwise, get get the responses from the given question id
      else {
         this.currSurvey.questions.forEach(question => {
            if (question.question_id == question_id) {
               question.responses.forEach(response => {
                  this.dataFeed.push({
                     question: question.question_text,
                     question_id: question.question_id,
                     response: response.response_text,
                     date_taken: response.date_taken
                  })
               });
            }
         });
      }
   }

   // download the feed table as a CSV
   downloadCSV(csv): void {
      let csvFile;
      let downloadLink;
      // CSV file
      csvFile = new Blob([csv], { type: "text/csv" });
      // Download link
      downloadLink = document.createElement("a");
      // File name
      downloadLink.download = this.currSurvey.survey_name;
      // Create a link to the file
      downloadLink.href = window.URL.createObjectURL(csvFile);
      // Hide download link
      downloadLink.style.display = "none";
      // Add the link to DOM
      document.body.appendChild(downloadLink);
      // Click download link
      downloadLink.click();
   }

   // export the table to format for download
   exportTableToCSV(): void {
      let csv = [];
      let rows = document.querySelectorAll("table tr");
      for (let i = 0; i < rows.length; i++) {
         let row = [], cols = rows[i].querySelectorAll("td, th");
         for (let j = 0; j < cols.length; j++)
            row.push(cols[j].innerHTML);
         csv.push(row.join(","));
      }
      // Download CSV file
      this.downloadCSV(csv.join("\n"));
      console.log("This is the csv: " + csv.join("\n"))
   }

    // Get date for today formatted in yyyy-mm-dd
   private getDateToday(): any {
      let today = new Date();
      let d = today.getDate();
      let m = today.getMonth() + 1;
      let yyyy = today.getFullYear();
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
      // puts the date from a today into date format
      let currentdate = (yyyy + '-' + mm + '-' + dd);
      // returns the date to check against the date.taken of each submission
      return currentdate;
   }  
}