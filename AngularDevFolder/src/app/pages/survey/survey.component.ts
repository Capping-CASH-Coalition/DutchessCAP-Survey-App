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

  surveyData: Array<any> = [];
  responses = [-1, -1, -1, "", 1 - 1 - 1999];

  ngOnInit() {
    console.log(this.globals.surveys);
  }

  updateResponses(event, textValue: string, questionId: number) {
    console.log("pageChanged" + " " + this.globals.surveys[0].survey_id + " " + questionId);
    console.log(questionId);
    for (let element in this.responses) {
      this.responses["0"] = this.globals.surveys[0].survey_id; // What version of survey is taken on
      this.responses["1"] = questionId - 1; // Question id
      this.responses["2"] = this.selectOption; // Still need option id what option they choose
      this.responses["3"] = " test "; // Still need response text
      this.responses["4"] = 13; // year of taken
      console.log(element);
    }

    this.surveyData.push(this.responses);
    
    console.log(this.responses);
    console.log(this.surveyData);
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

  
  public setSelectedOption(value): void {
    console.log("Selected: " + value);
    this.selectOption = value;
  }
}