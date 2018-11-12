import { Globals } from './../../globals';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { NgForm } from '@angular/forms';

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

  ngOnInit() {
    console.log(this.globals.surveys);
  }

  /*
  updateResponsess(event, textValue: string, questionId: number) {
    console.log("pageChanged" + " " + this.globals.surveys[0].survey_id + " " + questionId);
    console.log(questionId);
    
    let responses = [-1, -1, -1, "", 1 - 1 - 1999];

    responses[0] = this.globals.surveys[0].survey_id; // What version of survey is taken on
    responses[1] = questionId; // Question id
    responses[2] = this.selectOption; // Still need option id what option they choose
    responses[3] = this.grabText(this.selectOption, questionId);; // Still need response text
    responses[4] = 11-12-2018; // year it was take

    this.surveyData.push(responses);
    
    console.log(responses);
    console.log(this.surveyData);
  }
*/
updateResponses(testForm : NgForm){
  console.log(testForm.value);
}
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

  
  public setSelectedOption(value): void {
    console.log("Selected: " + value);
    this.selectOption = value;
  }

  grabText(optionId, questionId){
    for (let option of this.globals.surveys[0].questions[questionId].options){
      if (this.selectOption == option.option_id){
        return option.option_text;
      }
    }
  }
}