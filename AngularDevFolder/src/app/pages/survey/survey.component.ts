import { Globals } from './../../globals';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})

export class SurveyComponent {
  constructor(private globals: Globals) { }

  currSurvey = this.globals.surveys[0].survey_id;

  selectOption: number;
  radioChoices = [];

  surveyData: Array<any> = [];

  ngOnInit() {
    console.log(this.globals.surveys);
  }

  updateResponses(event, textValue: string, questionId: number, page: number) {
    let responses = [-1, -1, -1, "", 1 - 1 - 1999];

    responses[0] = this.globals.surveys[0].survey_id; // What version of survey is taken on
    responses[1] = questionId; // Question id
    responses[2] = this.selectOption; // Still need option id what option they choose
    responses[3] = this.grabText(this.selectOption, questionId); // Still need response text
    responses[4] = 11 - 12 - 2018; // year it was take

    this.surveyData.push(responses);

    console.log(responses);
    console.log(this.surveyData);

  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }


  setSelectedOption(e, value, questionType): void {
    let index = 0;
    if ( questionType == "dd" || questionType == "mc"){
      console.log("Selected: " + value);
      this.selectOption = value;
    }else if ( questionType == "cb"){
      console.log( "Selected: " + value);
      if(e){
        if(e.target.checked){
          this.radioChoices.push(value);
          console.log(this.radioChoices);
        }else{
          console.log("unchecked");
          for (let choice of this.radioChoices){
            console.log(choice);
            if (choice == value){
              this.radioChoices.splice(index, 1);
            }
            index = index + 1;
          }
          index = 0;          
          console.log(this.radioChoices);
        }
      }
    }
  }

  grabText(optionId, questionId) {
    for (let option of this.globals.surveys[0].questions[questionId].options) {
      if (this.selectOption == option.option_id) {
        return option.option_text;
      }
    }
  }
}