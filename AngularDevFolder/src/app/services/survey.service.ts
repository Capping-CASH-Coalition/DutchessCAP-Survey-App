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

  // Function that will call the index.js route to get all active surveys
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
  // Function that will call the index.js post an individual survey response to a survey given a specific survey_id as a parameter
  postSurveyResponse(response) {
    return this.http.post<any>('http://localhost:3000/api/postSurveyResponse', JSON.stringify(response), httpOptions);
  }
  // Function that will call the index.js route to get all questions given a specific survey_id as a parameter
  updateSurveyQuestions(updates) {
    return this.http.post<any>('http://localhost:3000/api/updateSurveyQuestions', updates);
  }

  updateSurveyOptions(updates) {
    const params = new HttpParams()
      .set('updates', updates);
    return this.http.post<any>('http://localhost:3000/api/newSurveyOptions', { params });
  }

  insertSurveyQuestions(updates) {
    const params = new HttpParams()
      .set('updates', updates);
    return this.http.post<any>('http://localhost:3000/api/insertSurveyQuestion', { params });
  }

  postSurveyID(survey_name) {
    return this.http.post<any>('http://localhost:3000/api/postSurveyID', survey_name, httpOptions);
  }
  getSurveyID() {
    return this.http.get<any>('http://localhost:3000/api/getSurveyID');
  }
  postQuestionID(question) {
    return this.http.post<any>('http://localhost:3000/api/postQuestionID', question, httpOptions);
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

  postOptionID(option) {
    return this.http.post<any>('http://localhost:3000/api/postOptionID', option, httpOptions);
  }

  getOptionID() {
    return this.http.get<any>('http://localhost:3000/api/getOptionID');
  }

  postArchitectures(surveyComponent) {
    return this.http.post<any>('http://localhost:3000/api/postArchitectures', surveyComponent, httpOptions);
  }

  updateSurveyQuestion(question) {
    return this.http.put<any>('http://localhost:3000/api/updateSurveyQuestion', question, httpOptions);
  }

  updateSurveyOption(option) {
    return this.http.put<any>('http://localhost:3000/api/updateSurveyOption', option, httpOptions);
  }



  


}

