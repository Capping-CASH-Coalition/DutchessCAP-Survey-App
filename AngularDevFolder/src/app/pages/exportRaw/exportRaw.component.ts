import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
   selector: 'app-exportRaw',
   styleUrls: ['./exportRaw.component.css'],
   templateUrl: './exportRaw.component.html',
})
export class ExportRawComponent implements OnInit {
   
   constructor(private globals: Globals) {}

   // datafeed that the table uses to populate data
   dataFeed: any[];
   // set the current survey and the date to filter by
   currSurvey: any;
   dateFilter: Date;

   ngOnInit() {
      // set the current survey to the first survey in the  globals
      this.currSurvey = this.globals.surveys[0];
      // update the date value select to be the date created of the survey
      this.updateDate(this.currSurvey.date_created);
      // set the data feed to -1 which is all questions
      this.updateDataFeed(-1);
   }

   // set the date filter global from the survey
   updateDate(date) {
      this.dateFilter = date;
   }

   // set the current survey from the given id 
   updateSurvey(id) {
      this.currSurvey = this.globals.surveys[id];
      // get questions from the current survey
      this.getQuestions();
      // update feed to -1 which is all questions
      this.updateDataFeed(-1);
   }

   // get all the questions of th current survey, filtering out the inactive ones
   getQuestions(): string[] {
      return this.currSurvey.questions.filter(
         (question: any) =>
            question.question_active === true);
   }

   // updates the datafeed from a given question
   updateDataFeed(question_id: number) {
      // clear the datafeed.
      this.dataFeed = [];
      // if the question = -1 then get all questions from the survey
      if (question_id == -1) {
         this.currSurvey.questions.forEach(question => {
            if (question.question_active) {
               question.responses.forEach(response => {
                  this.dataFeed.push({
                     question: question.question_text,
                     question_id: question.question_id,
                     response: response.response_text,
                     date: response.date_taken
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
                     date: response.date_taken
                  })
               });
            }
         });
      }
   }

   // download the feed table as a CSV
   downloadCSV(csv) {
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
   exportTableToCSV() {
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
   }




}
