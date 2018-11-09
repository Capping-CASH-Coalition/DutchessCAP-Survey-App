import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
    selector: 'app-exportRaw',
    templateUrl: './exportRaw.component.html',
})
export class ExportRawComponent implements OnInit {
   constructor(private globals: Globals) {}

   dataFeed: any[] = this.createDataFeed();

    ngOnInit() {
    }

    private createDataFeed(): any[] {
      let returnDataFeed: any[] = [];
      this.globals.questionResponseData.forEach(question => {
         question.responses.forEach(response => {
            let data = {question_text: '', response: ''};
            data.question_text = question.question_text;
            data.response = response;
            returnDataFeed.push(data);
         });
      });
      
      return returnDataFeed;
    }


    
}
