import { Component, OnInit } from '@angular/core';
import { Login } from "./models/login";
import { SurveyService } from '../app/survey.service';
import {Globals} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SurveyService]
})
/*
public responses: Array<any> = [ {question_id: 1, question_num: 1, question_text: "What services do you need?", question_is_active: "true", question_type: "checkbox", option_id: 1, option_num: 1, option_text: "money", option_is_active: "true"},
                                 {question_id: 2, question_num: 2, question_text: "What city are you from?", question_type: "select", option_id: 2, option_num: 1, option_text: "Beacon", option_is_active: "true"},
                                 {question_id: 3, question_num: 3, question_text: "Additional comments:", question_type: "text", option_id: 3, option_num: 1, option_text: "nope", option_is_active: "true"},
                                 {question_id: 4, question_num: 4, question_text: "How can this survey be better?", question_type: "text", option_id: 4, option_num: 1, option_text: "by being over", option_is_active: "true"},
                                 {question_id: 5, question_num: 5, question_text: "In a few words, describe capping:", question_type: "text", option_id: 5, option_num: 1, option_text: "a class you must take to graduate and gain experience", option_is_active: "true"}];

public surveys: Array<any> =    [ {survey_id: 2, question_id: 1, question_num: 1, question_text: "What services do you need?", question_is_active: "true", question_type: "checkbox", option_id: 1, option_num: 1, option_text: "money", option_is_active: "true"},
                                  {survey_id: 2, question_id: 2, question_num: 2, question_text: "What city are you from?", question_type: "select", option_id: 2, option_num: 1, option_text: "Beacon", option_is_active: "true"},
                                  {survey_id: 2, question_id: 3, question_num: 3, question_text: "Additional comments:", question_type: "text", option_id: 3, option_num: 1, option_text: "nope", option_is_active: "true"},
                                  {survey_id: 2, question_id: 4, question_num: 4, question_text: "How can this survey be better?", question_type: "text", option_id: 4, option_num: 1, option_text: "by being over", option_is_active: "true"},
                                  {survey_id: 2, question_id: 5, question_num: 5, question_text: "In a few words, describe capping:", question_type: "text", option_id: 5, option_num: 1, option_text: "a class you must take to graduate and gain experience", option_is_active: "true"}];

public updates: Array<any> =    [ {survey_id: 2, question_id: 1, question_num: 1, question_text: "What services do you need?", question_is_active: "true", question_type: "checkbox", option_id: 1, option_num: 1, option_text: "money", option_is_active: "true"},
                                  {survey_id: 2, question_id: 2, question_num: 2, question_text: "What city are you from?", question_type: "select", option_id: 2, option_num: 1, option_text: "Beacon", option_is_active: "true"},
                                  {survey_id: 2, question_id: 3, question_num: 3, question_text: "Additional comments:", question_type: "text", option_id: 3, option_num: 1, option_text: "nope", option_is_active: "true"},
                                  {survey_id: 2, question_id: 4, question_num: 4, question_text: "How can this survey be better?", question_type: "text", option_id: 4, option_num: 1, option_text: "by being over", option_is_active: "true"},
                                  {survey_id: 2, question_id: 5, question_num: 5, question_text: "In a few words, describe capping:", question_type: "text", option_id: 5, option_num: 1, option_text: "a class you must take to graduate and gain experience", option_is_active: "true"}];

*/
export class AppComponent {


  constructor(private surveyService: SurveyService, public globals: Globals) { }

  ngOnInit() {
    this.surveyService.getSurveyQuestions('hi').subscribe((response)=>{
                //console.log('response is ', response);
        for (let i = 0; i < response.length; i++) {

            let qArray =
              {"question_num": response[i].question_num,
              "question_id": response[i].question_id,
              "question_text": response[i].question_text,
              "question_type": response[i].question_type,
              "question_is_active": response[i].question_is_active,
              "option_id": response[i].option_id,
              "option_num": response[i].option_num,
              "option_text": response[i].option_text,
              "option_is_active": response[i].option_is_active
            }
              ;
            this.globals.questions.push(qArray);

        }
        console.log(this.globals.questions);
},(error) => {
        console.log('error is ', error)
    })
/*

    this.surveyService.getSurveyResponses().subscribe((response)=>{
        this.results= [];
        //console.log('response is ', response);
        for (let i = 0; i < response.length; i++) {

            let rArray =
              {
              "question_id": response[i].question_id,
              "question_num": response[i].question_num,
              "question_text": response[i].question_text,
              "question_type": response[i].question_type,
              "question_is_active": response[i].question_is_active,
              "response_id": response[i].response_id,
              "survey_id": response[i].survey_id,
              "option_id": response[i].option_id,
              "response_text": response[i].response_text,
              "date_taken": response[i].date_taken,
            }
              ;
            this.results.push(rArray);

        }
        console.log(this.results);
},(error) => {
        console.log('error is ', error)
    })
    for(let j =0; j<surveys.length; j++){
    this.surveyService.addResponse(surveys[j]).subscribe((response)=>{
        this.responses = [];
        //console.log('response is ', response);
        for (let i = 0; i < response.length; i++) {

            let sArray =
              {
              "response_id": response[i].response_id,
              "question_id": surveys[i].question_id,
              "survey_id": response[i].survey_id,
              "option_id": response[i].option_id,
              "response_text": response[i].response_text,
            }
              ;
            this.responses.push(sArray);

        }
        console.log(this.responses);
},(error) => {
        console.log('error is ', error)
    })
}

for(let j =0; j <surveys.length; j++){
this.surveyService.addSurvey(responses[j]).subscribe((response)=>{
    this.surveys = [];
    //console.log('response is ', response);
    for (let i = 0; i < response.length; i++) {

        let lArray =
        {
        "question_id": response[i].question_id,
        "question_num": response[i].question_num,
        "question_text": surveys[i].question_text,
        "question_is_active": response[i].question_is_active,
        "question_type": response[i].question_type,
        "option_id": response[i].option_id,
        "option_num": response[i].option_num,
        "option_text": response[i].option_text,
        "option_is_active": response[i].option_is_active,
        "response_id": response[i].response_id,
        "survey_id": response[i].survey_id,
        "option_id": response[i].option_id,
        "response_text": response[i].response_text,
        "date_taken": response[i].date_taken
      }
          ;
        this.surveys.push(lArray);

    }
    console.log(this.surveys);
},(error) => {
    console.log('error is ', error)
})
}

for(let j =0; j <updates.length; j++){
  if updates[j].quesion_id = '';
this.surveyService.addSurvey(responses[j]).subscribe((response)=>{
    this.updates = [];
    //console.log('response is ', response);
    for (let i = 0; i < response.length; i++) {

        let mArray =
        {
        "question_id": response[i].question_id,
        "question_num": response[i].question_num,
        "question_text": response[i].question_text,
        "question_is_active": response[i].question_is_active,
        "question_type": response[i].question_type,
        "option_id": response[i].option_id,
        "option_num": response[i].option_num,
        "option_text": response[i].option_text,
        "option_is_active": response[i].option_is_active,
        "response_id": response[i].response_id,
        "survey_id": response[i].survey_id,
        "option_id": response[i].option_id,
        "response_text": response[i].response_text,
        "date_taken": response[i].date_taken
      }
          ;
        this.updates.push(bArray);

    }
    console.log(this.updates);
},(error) => {
    console.log('error is ', error)
})
}






  }

  loginInfo:Login = {
      first_name:'Linda',
      last_name:'Eddy',
      avatar:'ay.jpeg',
      title:'Admin'
  };
  */
}
}
