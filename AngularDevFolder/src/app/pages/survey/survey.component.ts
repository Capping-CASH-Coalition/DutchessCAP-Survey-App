import { Globals } from './../../globals';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})

export class SurveyComponent {
  constructor(private globals: Globals) {}

  responses: Array<any> = [];
  currSurvey = this.globals.surveys[0].survey_id;

  r: number;

  ngOnInit() {
    console.log(this.globals.surveys)
  }

  changeData(event,responseId: number, surveyId: string, questionId: number){
    this.r = responseId;
    console.log(this.r);
  }

  updateResponses(event){
    console.log("pageChanged" + " " + this.r)
  }
}

