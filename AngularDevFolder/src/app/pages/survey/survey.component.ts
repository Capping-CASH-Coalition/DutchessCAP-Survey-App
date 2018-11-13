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

  currSurvey = this.globals.surveys[1].survey_id;
  currSurveyVer= this.globals.surveys[1];

  selectOption: number;
  radioChoices = [];

  surveyData: Array<any> = [];
  radioResponses: Array<any> = [];

  ngOnInit() {
    console.log(this.globals.surveys);
  }

  updateResponses(event, textValue: string, questionIndex: number, page: number) {
    let responses = [-1, -1, -1, "", 1 - 1 - 1999];
    let index = 0;
    console.log(questionIndex);
    if ( this.currSurveyVer.questions[questionIndex].question_type == "dropdown" || this.currSurveyVer.questions[questionIndex].question_type == "mc" ){
      responses[0] = this.currSurvey; // What version of survey is taken on
      responses[1] = this.currSurveyVer.questions[questionIndex].question_id; // Question id
      responses[2] = this.selectOption; // Still need option id what option they choose
      responses[3] = this.grabText(this.selectOption, questionIndex); // Still need response text
      responses[4] = 11 - 12 - 2018; // year it was take      
      
      this.surveyData.push(responses);
    } else if ( this.currSurveyVer.questions[questionIndex].question_type == "checkboxes" ){
      for( let option of this.radioChoices){
        responses = [-1, -1, -1, "", 1 - 1 - 1999];
        responses[0] = this.currSurvey; // What version of survey is taken on
        responses[1] = this.currSurveyVer.questions[questionIndex].question_id;
        responses[2] = option;
        responses[3] = this.grabText(option, questionIndex);
        responses[4] = 11 - 12 - 2018;

        console.log(option);

        this.surveyData.push(responses);

      } 
    } else if ( this.currSurveyVer.questions[questionIndex].question_type == "text" ){
          responses = [-1, -1, -1, "", 1 - 1 - 1999];
          responses[0] = this.currSurvey; // What version of survey is taken on
          responses[1] = this.currSurveyVer.questions[questionIndex].question_id;
          responses[2] = null;
          responses[3] = textValue;
          responses[4] = 11 - 12 - 2018;
  
          console.log(textValue);
  
          this.surveyData.push(responses);
    }

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

  grabText(optionId, questionIndex) {
    for (let option of this.currSurveyVer.questions[questionIndex].options) {
      if (this.selectOption == option.option_id) {
        return option.option_text;
      }else if(optionId == option.option_id)
        return option.option_text;
    }
  }

  grabIndex(questionId){
    let index = 0;
    for(let questionIndex in this.currSurveyVer.questions){
      if(questionId == this.currSurveyVer.questions[questionIndex].question_id){
        index = parseInt(questionIndex);
      }
    };
    return index;    
  }
}