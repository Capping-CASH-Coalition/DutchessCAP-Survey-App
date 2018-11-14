import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
   selector: 'app-exportRaw',
   styleUrls: ['./exportRaw.component.css'],
   templateUrl: './exportRaw.component.html',
})
export class ExportRawComponent implements OnInit {
   constructor(private globals: Globals) { }

   dataFeed: any[];

   currSurvey: any;
   dateFilter: Date;

   ngOnInit() {
      this.currSurvey = this.globals.surveys[0];
      this.updateDate(this.currSurvey.date_created);
      this.updateDataFeed(-1);
   }

   updateDate(date) {
      this.dateFilter = date;
   }

   updateSurvey(id) {
      this.currSurvey = this.globals.surveys[id];
      this.getQuestions();
      this.updateDataFeed(-1);
   }

   getQuestions(): string[] {
      return this.currSurvey.questions.filter(
         (question: any) =>
            question.question_active === true);
   }

   updateDataFeed(question_id: number) {
      this.dataFeed = [];
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
