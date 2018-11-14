import { Globals } from './../../globals';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { stringify } from 'querystring';
import { PaginationInstance } from 'ngx-pagination';
import { SurveyService } from '../../survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SurveyComponent {
  constructor(private globals: Globals, private surveyService: SurveyService) { }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 1,
    currentPage: 1
  };

  currSurvey = this.globals.surveys[0].survey_id;
  currSurveyVer = this.globals.surveys[0];

  selectOption: number;
  radioChoices = [];

  surveyData: Array<any> = [];
  radioResponses: Array<any> = [];

  ngOnInit() {
    console.log(this.globals.surveys);
  }

  submit(){

    for (let i = 0; i < this.surveyData.length; i++) {
      this.surveyService.postSurveyResponse(this.surveyData[i]);
    }
    console.log("popop");
  }

  updateResponses(event, textValue: string, questionIndex: number, page: number) {
    var now = new Date();
    var month = now.getUTCMonth() + 1;
    var day = now.getUTCDate();
    var year = now.getUTCFullYear();

    let responses = [-1, -1, -1, "", now];
    let index = 0;

    if (this.currSurveyVer.questions[questionIndex].question_type == "dropdown" || this.currSurveyVer.questions[questionIndex].question_type == "mc") {
      responses[0] = this.currSurvey; // What version of survey is taken on
      responses[1] = this.currSurveyVer.questions[questionIndex].question_id; // Question id
      responses[2] = this.selectOption; // Still need option id what option they choose
      responses[3] = this.grabText(this.selectOption, questionIndex); // Still need response text
      responses[4] = year + "-" + month + "-" + day; // year it was take      

      this.surveyData.push(responses);
    } else if (this.currSurveyVer.questions[questionIndex].question_type == "checkboxes") {
      for (let option of this.radioChoices) {
        responses = [-1, -1, -1, "", 1 - 1 - 1999];
        responses[0] = this.currSurvey; // What version of survey is taken on
        responses[1] = this.currSurveyVer.questions[questionIndex].question_id;
        responses[2] = option;
        responses[3] = this.grabText(option, questionIndex);
        responses[4] = year + "-" + month + "-" + day;

        console.log(option);

        this.surveyData.push(responses);

      }
    } else if (this.currSurveyVer.questions[questionIndex].question_type == "text") {
      responses = [-1, -1, -1, "", 1 - 1 - 1999];
      responses[0] = this.currSurvey; // What version of survey is taken on
      responses[1] = this.currSurveyVer.questions[questionIndex].question_id;
      responses[2] = null;
      responses[3] = textValue;
      responses[4] = year + "-" + month + "-" + day;

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
    if (questionType == "dd" || questionType == "mc") {
      console.log("Selected: " + value);
      this.selectOption = value;
    } else if (questionType == "cb") {
      console.log("Selected: " + value);
      if (e) {
        if (e.target.checked) {
          this.radioChoices.push(value);
          console.log(this.radioChoices);
        } else {
          console.log("unchecked");
          for (let choice of this.radioChoices) {
            console.log(choice);
            if (choice == value) {
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
      } else if (optionId == option.option_id)
        return option.option_text;
    }
  }

  grabIndex(questionId) {
    let index = 0;
    for (let questionIndex in this.currSurveyVer.questions) {
      if (questionId == this.currSurveyVer.questions[questionIndex].question_id) {
        index = parseInt(questionIndex);
      }
    };
    return index;
  }

  removeResponse(){
    this.surveyData.pop();
    console.log(this.surveyData);
  }
}