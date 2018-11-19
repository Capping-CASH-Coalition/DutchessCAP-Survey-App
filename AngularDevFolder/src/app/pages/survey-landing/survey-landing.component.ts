import { Globals } from '../../globals';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { NgForm } from '@angular/forms';
import { SurveyService } from 'app/services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveyLanding',
  templateUrl: './survey-landing.component.html',
  styleUrls: ['./survey-landing.component.css'],
})

export class SurveyLandingComponent implements OnInit {

constructor(private globals: Globals, 
            private surveyService: SurveyService,
            private router: Router) { }

  test = [];
  selectedSurveyId: number;
  public surveys: Array<any> = [{
    survey_id: 0,
         survey_name: "",
         date_created: "",
         questions: [
            {
               question_id: 0,
               question_text: "",
               question_type: "",
               question_active: true,
               options: [
                  { option_id: 0, option_text: "", option_active: true }
               ],
               responses: [
                  { response_id: 0, response_text: ""}
               ]
            }
          ]
  }];

  ngOnInit() {
    this.surveyService.getSurveys().subscribe((response) => {
      for (let i = 0; i < response.length; i++) {
        let survey = {
          "survey_id": response[i].survey_id,
          "survey_name": response[i].survey_name,
          "date_taken": response[i].date_taken
        };

        this.globals.surveys.push(survey);
        console.log(this.globals.surveys);
      }
    }, (error) => {
      console.log('error is ', error)
      })
  }

  onStart() {
    this.router.navigate(['survey']);
    //this.test.push(start.value);
    //console.log(this.test[0]);
  }

  surveySelect($event, value) {
    this.selectedSurveyId = value;
    console.log(this.selectedSurveyId);
  }

}