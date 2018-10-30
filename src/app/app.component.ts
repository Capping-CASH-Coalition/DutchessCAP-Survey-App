import { Component, OnInit } from '@angular/core';
import { Login } from "./models/login";
import { Survey } from "./models/survey";
import { SurveyService } from '../app/survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SurveyService]
})
export class AppComponent {
  version: number;
  yearCreated: Date;
  id: number;
  type: string;
  questions: Array<any>;
  options: Array<any>;
  responses: Array<any>;
  personId: number;
  yearTaken: Date;
  email: string;
  firstName: string;
  lastName: string;

  constructor(private surveyService: SurveyService) { }

  ngOnInit() { 
    this.surveyService.getQuestions().subscribe((response)=>{
        this.questions = [];
        console.log('response is ', response);
        for (let i = 0; i < response.length; i++) {
          if (response[i].survey_version == 1) {
            this.version = 1;
            let qArray = [
              {"question_num": response[i].question_num, 
              "question_id": response[i].question_id, 
              "question_text": response[i].question_text, 
              "question_type": response[i].question_type}
              ];
            this.questions.push(qArray);
          }
        }
        this.surveyService.getOptions().subscribe((response)=>{
          this.options = [];
          console.log('response is ', response);
          for (let i = 0; i < this.questions.length; i++) {
            console.log(response[i]);
            for (let j = 0; j < response.length; j++) {
              if (response[j].question_id == this.questions[i][0].question_id) {
                let rArray = [
                  {"option_id": response[i].option_id, 
                  "option_num": response[i].option_num, 
                  "option_text": response[i].option_text}
                  ];
                this.options.push(rArray);
              }
            }
          }
          console.log(this.options);
        },(error) => {
            console.log('error is ', error)
        })
    },(error) => {
        console.log('error is ', error)
    })

  }

  loginInfo:Login = {
      first_name:'Linda',
      last_name:'Eddy',
      avatar:'ay.jpeg',
      title:'Admin'
  };

}