import { Globals } from './../../globals';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})

export class SurveyComponent {
  constructor(private globals: Globals) {}

  currSurvey = this.globals.surveys[0].survey_id;

  surveyData: Array<any> = [];
  responses = [1, 1, 1, "test", 1-1-1999];

  responseOption: string;
  optionChoice: number;
  responseTextArea: string = "";

  ngOnInit() {
    console.log(this.globals.surveys);
  }
  
  changeData(event,responseText: string, optionId: number){
    this.responseOption = responseText;
    this.optionChoice = optionId;
    console.log(responseText, optionId);
    console.log(this.surveyData);
  }

  updateResponses(event, textValue: string, questionNum: number){
    this.responseTextArea = textValue;
    console.log("pageChanged" + " " + this.globals.surveys[0].survey_id + " " + this.responseOption + " " + this.responseTextArea);

    for (let element in this.responses){

      switch(element){
        case "0":{
          this.responses[0] = this.globals.surveys[0].survey_id;
        }
        case "1":{
          this.responses[1] = questionNum - 2;
        }
        case "2":{
          this.responses[2] = this.optionChoice;
        }
        case "3":{
          this.responses[3] = this.responseOption;
        }
        case "4":{
          this.responses[4] = "1-1-199";
        }
      }
    }

    
    this.surveyData.push(this.responses);
    console.log(this.responses);
    console.log(this.surveyData);
  }
}