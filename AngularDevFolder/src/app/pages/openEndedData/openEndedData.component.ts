import { Component, OnInit } from '@angular/core';
import { Globals } from "../../globals"


@Component({
    selector: 'app-openEndedData',
    styleUrls: ['./openEndedData.component.css'],
    templateUrl: './openEndedData.component.html',
})
export class OpenEndedDataComponent implements OnInit {
   
   constructor(private globals: Globals) {}

   dataFeed: string[];
   survey_id: string = this.globals.surveys[0].survey_id;

   ngOnInit() {
   // this.dataFeed = this.globals.questionResponseData[0].responses;
   }

   updateSurvey(id) {
      this.survey_id = id;
      console.log(this.survey_id);
   }



   updateDataFeed(currQuestion: string): void {
      this.globals.questionResponseData.forEach(question => {
         if (question.question_text === currQuestion) {
            this.dataFeed = question.responses;
         }     
      })
   }


}
