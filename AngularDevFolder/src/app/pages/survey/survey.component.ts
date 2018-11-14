import { Globals } from './../../globals';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  // Pagination element uses this
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 1,
    currentPage: 1
  };

  // Hardcoded for now
  currentSurveyId = this.globals.surveys[0].survey_id;
  currentSurveyIndex = this.globals.surveys[0];

  selectedOption: number;
  radioChoices: Array<any> = [];
  surveyData: Array<any> = [];
  radioResponses: Array<any> = [];

  ngOnInit() {
  }

  // When submit button is hit, this will post the survey data to the database
  postOnSubmit() {
    // For each response in surveyData, post the surveyData[index] response object
    for (let i = 0; i < this.surveyData.length; i++) {
      this.surveyService.postSurveyResponse(this.surveyData[i]);
    }
    console.log("popop");
  }

  // When next button is clicked, save the selected options to the survey data object
  updateResponses(event, textValue: string, questionIndex: number, page: number) {
 
    // Response object mirrors the database response table
    let response = {survey_id: 0,
                    question_id: 0,
                    option_id: 0,
                    response_text: ""};
    
    // If question type is dropdown or multiple choice, only need to add 1 response
    if (this.currentSurveyIndex.questions[questionIndex].question_type == "dropdown" ||
        this.currentSurveyIndex.questions[questionIndex].question_type == "mc") {
          response.survey_id = this.currentSurveyId; // Survey ID
          response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
          response.option_id = this.selectedOption; // Option ID
          response.response_text = this.getResponseText(this.selectedOption, questionIndex); // Response text
          // Push to survey data array
          this.surveyData.push(response);
    // If question type is checkbox, check for multiple responses
    } else if (this.currentSurveyIndex.questions[questionIndex].question_type == "checkboxes") {
      // Iterate through the options that were selected
      for (let option of this.radioChoices) {
        response.survey_id = this.currentSurveyId; // Survey ID
        response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
        response.option_id = option; // Option ID
        response.response_text = this.getResponseText(option, questionIndex); // Response text

        console.log(option);
        // Push to survey data array
        this.surveyData.push(response);
      }
      // Empty the radioChoices array
      this.radioChoices = [];
    // If question type is text (open-ended), set option id to 1
    } else if (this.currentSurveyIndex.questions[questionIndex].question_type == "text") {
      response.survey_id = this.currentSurveyId; // Survey ID
      response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
      response.option_id = 1; // Option ID
      response.response_text = textValue; // Response text

      console.log(textValue);
      this.surveyData.push(response);
    }

    console.log(this.surveyData);
  }

  // This is called to find the selected options within the HTML
  setSelectedOption(event, value, questionType): void {
    // If question type is dropdown or multiple choice, there is only 1 selected value
    if (questionType == "dd" || questionType == "mc") {
      console.log("Selected: " + value);
      this.selectedOption = value;
    // If question type is checkbox, there is 1+ options
    } else if (questionType == "cb") {
      console.log("Selected: " + value);
      // event is the clicked HTML element
      if (event) {
        // If checked, add it to the radioChoice array
        if (event.target.checked) {
          this.radioChoices.push(value);
          console.log(this.radioChoices);
        // If unchecked, remove it from the radioChoice array
        } else {
          console.log("unchecked");
          // Iterate through the radio choices to see which matches the value
          for (let i = 0; i < this.radioChoices.length; i++) {
            console.log(this.radioChoices[i]);
            // If it matches, remove it from radioChoice array
            if (this.radioChoices[i] == value) {
              this.radioChoices.splice(i, 1);
            }
          }
          console.log(this.radioChoices);
        }
      }
    }
  }

  getResponseText(optionId, questionIndex) {
    // Iterate through the question's options
    for (let option of this.currentSurveyIndex.questions[questionIndex].options) {
      if (this.selectedOption == option.option_id) {
        return option.option_text;
      } else if (optionId == option.option_id)
        return option.option_text;
    }
  }

  // Gets called
  getQuestionIndex(questionId) {
    for (let i = 0; i < this.currentSurveyIndex.questions.length; i++) {
      if (questionId == this.currentSurveyIndex.questions[i].question_id) {
        return i;
      }
    };
  }

  // Gets called when previous button is clicked
  removeResponse() {
    this.surveyData.pop();
    console.log(this.surveyData);
  }
}