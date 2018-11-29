import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders, HttpResponse, HttpClient, HttpErrorResponse } from '@angular/common/http'
import { SurveyInfo } from 'app/models/surveyInfo.model';
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

  // Function that will call the index.js route to get all active surveys
  getActiveSurveys(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:3000/api/activeSurveys', { observe: 'response'});
  }

  // Function that will call the index.js route to get all surveys
  getSurveys(): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:3000/api/surveys', { observe: 'response'});
  }
  
  // Function that will call the index.js route to get all questions given a specific survey_id as a parameter
  getSurveyQuestions(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:3000/api/surveyQuestions/' + survey_id, { observe: 'response'});
  }
  
  // Function that will call the index.js route to get all options given a specific survey_id as a parameter
  getSurveyOptions(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:3000/api/surveyOptions/' + survey_id, { observe: 'response'});
  }
  
  // Function that will call the index.js route to get all responses given a specific survey_id as a parameter
  getSurveyResponses(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:3000/api/surveyResponses/' + survey_id, { observe: 'response'});
  }

  getDistinctSurveyHash(survey_id): Observable<HttpResponse<any>> {
    return this.http.get<any>('http://localhost:3000/api/getDistinctSurveyHash/' + survey_id, { observe: 'response' });
  }

  /* 
    Post functions
  */
  
  // Function that will call the index.js to post an individual survey response to a survey given a specific survey_id as a parameter
  postSurveyResponse(response): Observable<Response> {
    return this.http.post<Response>('http://localhost:3000/api/postSurveyResponse', response, httpOptions);
  }

  postSurvey(survey_name): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/postSurvey', survey_name, httpOptions);
  }

  postQuestion(question): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/postQuestion', question, httpOptions);
  }

  postOption(option): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/postOption', option, httpOptions);
  }

  postArchitecture(surveyComponent): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/postArchitecture', surveyComponent, httpOptions);
  }

  /* 
    Put/Update functions
  */

  // Function that will call the index.js route to update a questions given the specific updates
  updateSurveyActive(survey): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/updateSurveyActive', survey, httpOptions);
  }

  updateSurveyQuestionActive(question): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/updateSurveyQuestionActive', question, httpOptions);
  }

  updateSurveyOptionActive(option): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/updateSurveyOptionActive', option, httpOptions);
  }

  wait(ms): void {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    //return throwError(
      //'Something bad happened; please try again later.');
  };

}