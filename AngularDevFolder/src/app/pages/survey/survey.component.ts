import { Globals } from './../../globals';
import { Component, ChangeDetectionStrategy, DoCheck, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { SurveyService } from '../../services/survey.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Globals, SurveyService]
})

export class SurveyComponent implements OnInit, DoCheck {
  // Declare the imports to be used within the component
  constructor(public globals: Globals, 
              public surveyService: SurveyService,
              public auth: AuthenticationService,
              private router: Router) { }

  // Survey landing/home page functions/variables
  selectedSurveyId: number;
  showLanding: boolean = true;
  // This continuously checks if the user is authenticated
  ngDoCheck(): void {
    // If authenticated, redirect to the home dashboard
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['home']);
    }
  }

  // On component initialization, get the survey ids, names, and date created
  ngOnInit() {
    this.surveyService.getSurveys().subscribe((response) => {
      // Get 1 survey at a time and push into globals
      for (let i = 0; i < response.length; i++) {
        let survey = {
          "survey_id": response[i].survey_id,
          "survey_name": response[i].survey_name,
          "date_created": response[i].date_created
        };

        this.globals.surveys.push(survey);
        console.log(this.globals.surveys);
      }
    }, (error) => {
      console.log('error is ', error)
      })
  }

  // When the user clicks start, get the survey questions and options based on the survey id
  onStart() {
    this.showLanding = false;
    this.surveyService.getSurveyQuestions(this.selectedSurveyId).subscribe((response)=>{
      // For all surveys in globals, check to see which matches the selectedSurveyId
      for (let i = 0; i < this.globals.surveys.length; i++) {
        // If it matches, push the question into that array index
        if (this.globals.surveys[i].survey_id == this.selectedSurveyId) {
          // Initialize the questions?
          //this.globals.surveys[i].questions = [];
          //console.log('response is ', response);
          for (let i = 0; i < response.length; i++) {
            let question =
            {
              "question_id": response[i].question_id,
              "question_text": response[i].question_text,
              "question_type": response[i].question_type,
              "question_is_active": response[i].question_is_active
            };
            this.globals.surveys[i].questions.push(question);
          }
        }
        console.log(this.globals.surveys[i].questions);
      }

      this.surveyService.getSurveyOptions(this.selectedSurveyId).subscribe((response) => {
        for (let j = 0; j < this.globals.surveys.length; j++) {
          for (let k = 0; k < this.globals.surveys[j].questions.length; k++) {
            for (let l = 0; l < response.length; l++) {
              let option =
              {
                "option_id": response[l].option_id,
                "option_text": response[l].question_text,
                "option_is_active": response[l].option_is_active,
                "question_id": response[l].question_id
              };

              if (this.globals.surveys[j].survey_id == this.selectedSurveyId) {
                if (this.globals.surveys[j].questions[k].question_id == response[l].question_id) {
                  this.globals.surveys[j].questions.push(option);
                  console.log(this.globals.surveys[j].questions);
                }
              }
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
    

  // When a user clicks a survey in the dropdown, save the selectedSurveyId
  surveySelect($event, value) {
    this.selectedSurveyId = value;
    console.log(this.selectedSurveyId);
  }

  // Survey variables and functions
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

  // When submit button is hit, this will post the survey data to the database
  postOnSubmit() {
    // For each response in surveyData, post the surveyData[index] response object
    for (let i = 0; i < this.surveyData.length; i++) {
      this.surveyService.postSurveyResponse(this.surveyData[i]).subscribe((response)=>{
        let responses = [];
        //console.log('response is ', response);
        for (let i = 0; i < response.length; i++) {
           
          let choice =
          {
            "question_id": response[i].question_id,
            "survey_id": response[i].survey_id,
            "option_id": response[i].option_id,
            "response_text": response[i].response_text
            }
              ;
            responses.push(choice);
            console.log(responses);
        }
        
      },(error) => {
          console.log('error is ', error)
      })
    } 
    this.router.navigate(['contact']);
  }

  // When next button is clicked, save the selected options to the survey data object
  updateResponses(textValue: string, questionIndex: number) {
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
      for (let i = 0; i < this.radioChoices.length; i++) {
        response = {survey_id: 0,
                    question_id: 0,
                    option_id: 0,
                    response_text: ""};
        response.survey_id = this.currentSurveyId; // Survey ID
        response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
        response.option_id = this.radioChoices[i]; // Option ID
        response.response_text = this.getResponseText(this.radioChoices[i], questionIndex); // Response text
        console.log("pushing to surveyData: " + this.radioChoices[i]);
        // Push to survey data array
        this.surveyData.push(response);
        console.log("survey data after push: " + this.surveyData[i])
      }
      // Empty/initialize the radioChoices array
      //this.radioChoices = [];
    // If question type is text (open-ended), set option id to 1
    } else if (this.currentSurveyIndex.questions[questionIndex].question_type == "text") {
      response.survey_id = this.currentSurveyId; // Survey ID
      response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
      response.option_id = 1; // Option ID
      response.response_text = textValue; // Response text

      //console.log(textValue);
      this.surveyData.push(response);
    }

    console.log(this.surveyData);
  }

  // This is called to find the selected options within the HTML
  setSelectedOption(event, value, questionType): void {
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
  removeResponse(questionIndex: number, currentPage: number) {
    if (this.currentSurveyIndex.questions[questionIndex].question_type == "checkboxes") {
      // Pop 1 for each response in surveyData that matches the current question ID
      for (let i = this.surveyData.length - 1; i > 0; i--) {
        if (this.surveyData[i].question_id == this.currentSurveyIndex.questions[questionIndex].question_id) {
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
