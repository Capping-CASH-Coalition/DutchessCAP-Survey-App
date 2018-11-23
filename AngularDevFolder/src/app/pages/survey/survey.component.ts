//import { Globals } from './../../globals';
import { Component, ChangeDetectionStrategy, DoCheck, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { SurveyService } from '../../services/survey.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Survey } from '../../models/survey.model';
import { Question } from '../../models/question.model';
import { Response } from '../../models/response.model';
import { Option } from '../../models/option.model';
import { SurveyInfo } from 'app/models/surveyInfo.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SurveyService]
})

export class SurveyComponent implements OnInit, DoCheck {
  // Declare the imports to be used within the component
  constructor(public surveyService: SurveyService,
              public auth: AuthenticationService) { }

  /* 
      Variables for the Survey Component
  */

  // Survey variables set by surveySelect()
  selectedSurveyId: number;
  selectedSurveyIndex: number;
  // Shows the landing introduction when true
  showLanding: boolean = true;
  // Holds the dynamic survey variables for display
  surveys: Array<any> = [];
  // Set by optionSelect()
  selectedOption: number;
  // Fills when multiple choices are selected by updateResponses()
  radioChoices: Array<any> = [];
  // Pushes/pops when user selects next or previous
  surveyData: Array<any> = [];
  // Pagination element uses this
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 1,
    currentPage: 1
  };

  /*
      Survey Landing/Home page functions
  */

  // This continuously checks if the user is authenticated
  ngDoCheck(): void {
    // If authenticated, redirect to the home dashboard
    if (!this.auth.isAuthenticated) {
      //this.router.navigate(['home']);
    }
  }

  // On component initialization, get the survey ids, names, and date created
  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe((response) => {
      // Get 1 survey at a time and push into surveys array
      for (let i = 0; i < response.length; i++) {
        let survey: SurveyInfo = {
              "survey_id": response[i].survey_id,
              "survey_name": response[i].survey_name,
              "date_created": response[i].date_created
        };

        this.surveys.push(survey);
        console.log(this.surveys);
      }
    }, (error) => {
      console.log('error is ', error)
      })
  }

  // When a user clicks a survey in the dropdown, save the selectedSurveyId
  surveySelect($event, value) {
    this.selectedSurveyId = value;
    for (let i = 0; i < this.surveys.length; i++) {
      if (this.selectedSurveyId == this.surveys[i].survey_id) {
        this.selectedSurveyIndex = this.surveys[i];
      }
    }
    console.log(this.selectedSurveyId);
  }

  // When the user clicks start, get the survey questions and options based on the survey id
  onStart(): void {
    console.log(this.showLanding);
    this.showLanding = false;
    this.surveyService.getSurveyQuestions(this.selectedSurveyId).subscribe((response)=>{
      // Initialize the questions?
      //this.surveys[i].questions = [];
      //console.log('response is ', response);
      for (let i = 0; i < response.length; i++) {
        let question: Question = {
              "question_id": response[i].question_id,
              "question_text": response[i].question_text,
              "question_type": response[i].question_type,
              "question_is_active": response[i].question_is_active
        };
        this.surveys[this.selectedSurveyIndex].questions.push(question);
      }
      console.log(this.surveys[this.selectedSurveyIndex].questions);

      // Get the survey options based on the selectedSurveyId
      this.surveyService.getSurveyOptions(this.selectedSurveyId).subscribe((response) => {
          for (let i = 0; i < this.surveys[this.selectedSurveyIndex].questions.length; i++) {
            for (let k = 0; k < response.length; k++) {
              let option: Option = {
                    "option_id": response[k].option_id,
                    "option_text": response[k].question_text,
                    "option_is_active": response[k].option_is_active,
                    "question_id": response[k].question_id
              };

              if (this.surveys[this.selectedSurveyIndex].questions[i].question_id == response[k].question_id) {
                this.surveys[this.selectedSurveyIndex].questions.push(option);
                console.log(this.surveys[this.selectedSurveyIndex].questions);
              }
          }
        }
      }, (error) => {
        console.log('error is ', error)
      }) 
    
    },(error) => {
      console.log('error is ', error)
    })
  }

  /*
      Survey Functions
  */

  // When submit button is hit, this will post the survey data to the database
  postOnSubmit() {
    // For each response in surveyData, post the surveyData[index] response object
    for (let i = 0; i < this.surveyData.length; i++) {
      this.surveyService.postSurveyResponse(this.surveyData[i]).subscribe((response)=>{
        let responses = [];
        //console.log('response is ', response);
        for (let i = 0; i < response.length; i++) {
           
          let choice: Response = {
                "question_id": response[i].question_id,
                "survey_id": response[i].survey_id,
                "option_id": response[i].option_id,
                "response_text": response[i].response_text
          };
          responses.push(choice);
          console.log(responses);
        }
        
      },(error) => {
          console.log('error is ', error)
      })
    } 
  }

  // When next button is clicked, save the selected options to the survey data object
  updateResponses(textValue: string, questionIndex: number) {
    // Response object mirrors the database response table
    let response: Response = {
          survey_id: 0,
          question_id: 0,
          option_id: 0,
          response_text: ""
    };
    
    // If question type is dropdown or multiple choice, only need to add 1 response
    if (this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_type == "dropdown" ||
        this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_type == "mc") {
          response.survey_id = this.selectedSurveyId; // Survey ID
          response.question_id = this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_id; // Question ID
          response.option_id = this.selectedOption; // Option ID
          response.response_text = this.getResponseText(this.selectedOption, questionIndex); // Response text
          // Push to survey data array
          this.surveyData.push(response);
    // If question type is checkbox, check for multiple responses
    } else if (this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_type == "checkboxes") {
      // Iterate through the options that were selected
      for (let i = 0; i < this.radioChoices.length; i++) {
        // Initialize response to prevent duplication
        response = { 
          survey_id: 0,
          question_id: 0,
          option_id: 0,
          response_text: ""
        };

        response.survey_id = this.selectedSurveyId; // Survey ID
        response.question_id = this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_id; // Question ID
        response.option_id = this.radioChoices[i]; // Option ID
        response.response_text = this.getResponseText(this.radioChoices[i], questionIndex); // Response text
        console.log("pushing to surveyData: " + this.radioChoices[i]);
        // Push to survey data array
        this.surveyData.push(response);
        console.log("survey data after push: " + this.surveyData[i])
      }
    // If question type is text (open-ended), set option id to 1
    } else if (this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_type == "text") {
      response.survey_id = this.selectedSurveyId; // Survey ID
      response.question_id = this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_id; // Question ID
      response.option_id = 1; // Option ID
      response.response_text = textValue; // Response text

      //console.log(textValue);
      this.surveyData.push(response);
    }
    console.log(this.surveyData);
  }

  // This is called to find the selected options within the HTML
  optionSelect(event, value, questionType): void {
    // If question type is dropdown or multiple choice, there is only 1 selected value
    if (questionType == "dd" || questionType == "mc") {
      this.selectedOption = value;
    // If question type is checkbox, there is 1+ options
    } else if (questionType == "cb") {
      // event is the clicked HTML element
      if (event) {
        // If checked, add it to the radioChoice array
        if (event.target.checked) {
          this.radioChoices.push(value);
        // If unchecked, remove it from the radioChoice array
        } else {
          // Iterate through the radio choices to see which matches the value
          for (let i = 0; i < this.radioChoices.length; i++) {
            // If it matches, remove it from radioChoice array
            if (this.radioChoices[i] == value) {
              this.radioChoices.splice(i, 1);
            }
          }
        }
      }
    }
  }

  getResponseText(optionId, questionIndex) {
    // Iterate through the question's options
    for (let option of this.surveys[this.selectedSurveyIndex].questions[questionIndex].options) {
      if (this.selectedOption == option.option_id) {
        return option.option_text;
      } else if (optionId == option.option_id)
        return option.option_text;
    }
  }

  // Gets called
  getQuestionIndex(questionId) {
    for (let i = 0; i < this.surveys[this.selectedSurveyIndex].questions.length; i++) {
      if (questionId == this.surveys[this.selectedSurveyIndex].questions[i].question_id) {
        return i;
      }
    };
  }

  // Gets called when previous button is clicked
  removeResponse(questionIndex: number, currentPage: number) {
    if (this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_type == "checkboxes") {
      // Pop 1 for each response in surveyData that matches the current question ID
      for (let i = this.surveyData.length - 1; i > 0; i--) {
        if (this.surveyData[i].question_id == this.surveys[this.selectedSurveyIndex].questions[questionIndex].question_id) {
          this.surveyData.pop();
        }
      }
      console.log(this.surveyData);
    // If question type is text (open-ended), multiple choice, or dropdown/select, pop 1
    } else {
      this.surveyData.pop();
    }
  }
}
