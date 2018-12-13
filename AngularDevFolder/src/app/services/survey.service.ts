import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpHeaders, HttpResponse, HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Response } from '../models/response.model'

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

  // Function that will call the index.js route to get all surveys info
  getAllSurveysInfo(): Observable<HttpResponse<any>> {
   return this.http.get<any>('http://localhost:8888/api/allSurveyInfo', { observe: 'response'});
  }

  // Function that will call the index.js route to survey submissions over time
  getSurveySubmissionsOverTime(): Observable<HttpResponse<any>> {
   return this.http.get<any>('http://localhost:8888/api/surveySubmissionsOverTime', { observe: 'response'});
  }

  // Function that will call the index.js route to get all active surveys
  getActiveSurveys(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8888/api/activeSurveys', { observe: 'response'});
  }

  // Function that will call the index.js route to get all surveys
  getAllSurveys(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8888/api/allSurveys', { observe: 'response'});
  }
  
  // Function that will call the index.js route to get all active questions given a specific survey_id as a parameter
  getActiveSurveyQuestions(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8888/api/activeSurveyQuestions/' + survey_id, { observe: 'response'});
  }

  // Function that will call the index.js route to get all questions given a specific survey_id as a parameter
  getAllSurveyQuestions(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8888/api/allSurveyQuestions/' + survey_id, { observe: 'response'});
  }
  
  // Function that will call the index.js route to get all active options given a specific survey_id as a parameter
  getActiveSurveyOptions(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8888/api/activeSurveyOptions/' + survey_id, { observe: 'response'});
  }

  // Function that will call the index.js route to get all options given a specific survey_id as a parameter
  getAllSurveyOptions(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8888/api/allSurveyOptions/' + survey_id, { observe: 'response'});
  }

  // Function that will call the index.js route to get all responses given a specific survey_id as a parameter
  getSurveyResponses(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8888/api/surveyResponses/' + survey_id, { observe: 'response'});
  }

  // Function that will get the password of a user given the username
  getUserPassword(username): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:8888/api/userPassword/' + username, { observe: 'response' });
  }

  /* 
    Post functions
  */
  
  // Function that will call the index.js to post survey responses
  postSurveyResponse(response): Observable<Response> {
    return this.http.post<Response>('http://localhost:8888/api/postSurveyResponse', response, httpOptions);
  }
  
  // Function that will call the index.js to post a new survey
  postNewSurvey(survey): Observable<any> {
    return this.http.post<any>('http://localhost:8888/api/postNewSurvey', survey, httpOptions);
  }

  // Function that will call the index.js to post a new question
  postQuestion(question): Observable<any> {
    return this.http.post<any>('http://localhost:8888/api/postQuestion', question, httpOptions);
  }

  // Function that will call the index.js to post a new option
  postOption(option): Observable<any> {
    return this.http.post<any>('http://localhost:8888/api/postOption', option, httpOptions);
  }

  // Function that will call the index.js to post a new architecture
  postArchitecture(surveyComponent): Observable<any> {
    return this.http.post<any>('http://localhost:8888/api/postArchitecture', surveyComponent, httpOptions);
  }

  /* 
    Put/Update functions
  */

  // Function that will call the index.js route to update the survey to active/inactive
  updateSurveyActive(survey): Observable<any> {
    return this.http.put<any>('http://localhost:8888/api/updateSurveyActive', survey, httpOptions);
  }

  // Function that will call the index.js route to update a question to active/inactive
  updateSurveyQuestionActive(question): Observable<any> {
    return this.http.put<any>('http://localhost:8888/api/updateSurveyQuestionActive', question, httpOptions);
  }

  // Function that will call the index.js route to update a question to active/inactive
  updateSurveyOptionActive(option): Observable<any> {
    return this.http.put<any>('http://localhost:8888/api/updateSurveyOptionActive', option, httpOptions);
  }

  // Wait a specified amount of time
  wait(ms): void {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
}
