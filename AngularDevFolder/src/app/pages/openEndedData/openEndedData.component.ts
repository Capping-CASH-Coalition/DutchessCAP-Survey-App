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

   ngOnInit() {
    this.dataFeed = this.globals.questionResponseData[0].responses;
   }

   updateDataFeed(currQuestion: string): void {
      this.globals.questionResponseData.forEach(question => {
         if (question.question_text === currQuestion) {
            this.dataFeed = question.responses;
         }     
      })
   }


}
