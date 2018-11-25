import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http'

// Http specifc header that is needed to post data to the database
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class SurveyService {

  // Instantiates the HttpClient class
  constructor(private http: HttpClient) { }

  /* 
    Get functions
  */

  // Function that will call the index.js route to get all active surveys
  getActiveSurveys() {
    return this.http.get<any>('http://localhost:3000/api/activeSurveys');
  }

  // Function that will call the index.js route to get all surveys
  getSurveys() {
    return this.http.get<any>('http://localhost:3000/api/surveys');
  }
  
  // Function that will call the index.js route to get all questions given a specific survey_id as a parameter
  getSurveyQuestions(survey_id) {
    return this.http.get<any>('http://localhost:3000/api/surveyQuestions/' + survey_id);
  }
  
  // Function that will call the index.js route to get all options given a specific survey_id as a parameter
  getSurveyOptions(survey_id) {
    return this.http.get<any>('http://localhost:3000/api/surveyOptions/' + survey_id);
  }
  
  // Function that will call the index.js route to get all responses given a specific survey_id as a parameter
  getSurveyResponses(survey_id) {
    return this.http.get<any>('http://localhost:3000/api/surveyResponses/' + survey_id);
  }

  getSurveyID() {
    return this.http.get<any>('http://localhost:3000/api/getSurveyID');
  }
  
  getQuestionLength() {
    return this.http.get<any>('http://localhost:3000/api/getQuestionLength');
  }
  
  getOptionLength() {
    return this.http.get<any>('http://localhost:3000/api/getOptionLength');
  }
  
  getSurveyLength() {
    return this.http.get<any>('http://localhost:3000/api/getSurveyLength');
  }

  getOptionID() {
    return this.http.get<any>('http://localhost:3000/api/getOptionID');
  }

  /* 
    Post functions
  */
  
  // Function that will call the index.js to post an individual survey response to a survey given a specific survey_id as a parameter
  postSurveyResponse(response) {
    return this.http.post<any>('http://localhost:3000/api/postSurveyResponse', response, httpOptions);
  }

  postSurveyID(survey_name) {
    return this.http.post<any>('http://localhost:3000/api/postSurveyID', survey_name, httpOptions);
  }

  postQuestionID(question) {
    return this.http.post<any>('http://localhost:3000/api/postQuestionID', question, httpOptions);
  }

  postOptionID(option) {
    return this.http.post<any>('http://localhost:3000/api/postOptionID', option, httpOptions);
  }

  postArchitectures(surveyComponent) {
    return this.http.post<any>('http://localhost:3000/api/postArchitectures', surveyComponent, httpOptions);
  }

  /* 
    Put/Update functions
  */

  // Function that will call the index.js route to update a questions given the specific updates
  updateSurveyQuestions(updates) {
    return this.http.post<any>('http://localhost:3000/api/updateSurveyQuestions', updates);
  }

  updateSurveyQuestion(question) {
    return this.http.put<any>('http://localhost:3000/api/updateSurveyQuestion', question, httpOptions);
  }

  updateSurveyOption(option) {
    return this.http.put<any>('http://localhost:3000/api/updateSurveyOption', option, httpOptions);
  }

}