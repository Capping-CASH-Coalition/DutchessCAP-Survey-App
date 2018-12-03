import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, DoCheck } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { SurveyService } from '../../services/survey.service';
import { Question } from 'app/models/question.model';
import { Option } from 'app/models/option.model';
import { Survey } from 'app/models/survey.model';
import { Response } from 'app/models/response.model'
import { Router } from '@angular/router';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SurveyService]
})
export class SurveyComponent implements OnInit {

  // Array that holds all survey structuring data
  surveys: Array<any> = [];

  //
  pageNumber = 0;

  showSurveyDiv: boolean = false;
  // Survey variables set by surveySelect()
  selectedSurveyId: number;
  selectedSurveyIndex: number;

  // Option_id that is set by optionSelect()
  selectedOption: number;

  // Fills when multiple choices are selected by updateResponses()
  checkboxChoices: Array<any> = [];

  // Pushes/pops when user selects next or previous
  surveyData: Array<any> = [];

  // Unique user hash
  currentUser: string;
  disabledSave: boolean = false;



  constructor(public surveyService: SurveyService,
    private changeref: ChangeDetectorRef,
    public auth: AuthenticationService
    ) { }


  // On component initialization, get the survey ids, names, and date created
  ngOnInit(): void {
    //Generates UUID on initialization and sets it to currentUser
    this.currentUser = this.generateUUID();

    this.surveyService.getActiveSurveys().subscribe(response => {
      // Get 1 survey at a time and push into surveys array
      for (let i = 0; i < response.body.length; i++) {
        let survey: Survey = {
          "survey_id": response.body[i].survey_id,
          "survey_name": response.body[i].survey_name,
          "date_created": response.body[i].date_created,
          questions: [],
        };
        this.surveys.push(survey);
      }
      this.changeref.detectChanges();
    }, (error) => {
      console.log('error is ', error)
      })

  }

  // This continuously checks if the user is authenticated
  ngDoCheck(): void {
    // If authenticated, redirect to the home dashboard
    if (!this.auth.isAuthenticated) {
      //this.router.navigate(['home']);
    }
  }

  onStart() {
    this.showSurveyDiv = true;
    // Once the selected surveyID is done, this will populate the data using the selected ID
    this.surveyService.getActiveSurveyQuestions(this.selectedSurveyId).subscribe(response => {
      // Initialize the questions
      this.surveys[this.selectedSurveyIndex].questions = [];
      // Iterate through the questions and push them one at a time
      for (let i = 0; i < response.body.length; i++) {
        let question: Question = {
          "question_id": response.body[i].question_id,
          "question_text": response.body[i].question_text,
          "question_type": response.body[i].question_type,
          "question_is_active": response.body[i].question_is_active,
          options: []
        };
        this.surveys[this.selectedSurveyIndex].questions.push(question);
      }
      //  console.log(this.surveys[this.selectedSurveyIndex]);
      this.changeref.detectChanges();

      // Get the survey options based on the selectedSurveyId
      this.surveyService.getActiveSurveyOptions(this.selectedSurveyId).subscribe(response => {
        for (let j = 0; j < this.surveys[this.selectedSurveyIndex].questions.length; j++) {
          for (let k = 0; k < response.body.length; k++) {
            let option: Option = {
              "option_id": response.body[k].option_id,
              "option_text": response.body[k].option_text,
              "option_is_active": response.body[k].option_is_active,
              "question_id": response.body[k].question_id
            };
            // If the question IDs match, push the option into the questions[j].options array
            if (this.surveys[this.selectedSurveyIndex].questions[j].question_id == response.body[k].question_id) {
              this.surveys[this.selectedSurveyIndex].questions[j].options.push(option);
              // console.log(this.surveys[this.selectedSurveyIndex].questions[j].options[k]);
            }
          }
        }
        this.changeref.detectChanges();
      }, (error) => {
        console.log('error is ', error)
      })
    }, (error) => {
      console.log('error is ', error)
    })

  }
  
    //when a user clicks an option from the dropdown menu
    surveySelect($event, value) {

      this.selectedSurveyId = value;
      for (let i = 0; i < this.surveys.length; i++) {
        if (this.selectedSurveyId == this.surveys[i].survey_id) {
          this.selectedSurveyIndex = i;
        }
        this.surveys[i].questions = [];
      }

    }
  

  // Deals with Radio/Text/Select and grabs correct values for DB
  valueChanges(survey_id, question_id, option_id, option_text) {
    //Checks for multiple options, runs for SELECT type
    if (typeof option_id == 'object') {
      // option is an array, filter the correct option id to get correlating option_text
      let options: any[] = option_id.filter(option => option.option_id == option_text);
      option_id = options[0].option_id;
      option_text = options[0].option_text;
    }
    // Creates response object to be able to model for
    let response: Response = {
      'survey_id': survey_id,
      'question_id': question_id,
      'option_id': option_id,
      'response_text': option_text,
      'survey_hash': this.currentUser
    }
    // gets the question index in the surveys.questions array from the question id
    let question_index = this.surveys[this.selectedSurveyId - 1].questions.findIndex(i => i.question_id === question_id);
    //sets the current question response model based off values passed through
    this.surveys[this.selectedSurveyId - 1].questions[question_index].responseModel = [response];

  }

  //Updates response array based on checked box
  updateCheckbox(currentQuestion, content, isChecked, option_id, survey_id, ) {
    //Checks to see if current question has response, if not make a response array for that Q  
    if (!currentQuestion.response) {
      currentQuestion.response = [];
      currentQuestion.responseModel = [];
    }
    //If Checkbox is checked, push the content of the checked box to response array
    if (isChecked) {
      currentQuestion.response.push(content); //Pushes value selected into response array
      let response: Response = {
        survey_id,
        question_id: currentQuestion.question_id,
        option_id,
        response_text: content,
        survey_hash: this.currentUser
      }

      currentQuestion.responseModel.push(response);

    } else {
      let index = currentQuestion.response.findIndex((o) => o === content);
      let temp = currentQuestion.responseModel.filter(item => item.option_id != option_id);
      currentQuestion.responseModel = temp;
      currentQuestion.response.splice(index, 1);
    }
  }

  hideQuestion(index) {
    if (this.pageNumber == index) {
      return false;
    }
    else {
      return true;
    }
  }

  onNext() {
    this.pageNumber++;
  }

  onPrevious() {
    this.pageNumber--;

  }

  isFirstPage() {
    if (this.pageNumber == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isLastPage() {
    if (this.pageNumber == this.surveys[this.selectedSurveyIndex].questions.length - 1) {
      return true;
    }
    else {
      return false;
    }
  }


  //Submit Button Functionality
  save() {
    this.disabledSave = true;
    //Takes the responsemodel from each question and pushes it to the surveyData object
    // console.log(this.surveys[this.selectedSurveyId - 1]);
    this.surveys[this.selectedSurveyId - 1].questions.forEach(element => {
      this.surveyData = this.surveyData.concat(element.responseModel)
    });

    // Uncleaned surveyData Array
    console.log(this.surveyData);

    // Takes surveyData array and cleans it of undefined values in array
    this.surveyData = this.surveyData.filter(function (element) {
      return element !== undefined;
    });


    // Cleaned surveyData Array
    console.log(this.surveyData);

    // Post the surveyData array to the API
    this.surveyService.postSurveyResponse(this.surveyData).subscribe();

    // Function to reload the page once submitted, this makes it so they can't submit it multiple times
    //window.location.reload();
    setTimeout(() => {this.sendThankYou()}, 1000);
  }

  generateUUID(): string {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  sendThankYou(): void {
    window.location.href='http://localhost:8888/#/thankyou';
  }
  
}