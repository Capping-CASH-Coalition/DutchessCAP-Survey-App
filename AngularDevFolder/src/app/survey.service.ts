import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SurveyService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<any>('http://localhost:3000/api/surveyQuestions');
  }

  getResponses() {
    return this.http.get<any>('http://localhost:3000/api/surveyResponses');
  }

  getSurveyResponses()

  getSurveyQuestions(String:survey_name){
    return this.http.get<any>('http://localhost:300/api/surveyQuestions', survey_name);
  }

  getSurveyQuestions(String: survey_name){
      return this.http.get<any>('http://localhost:300/api/surveyResponses', survey_name);
  }

 addResponse(responses: responses): Observable<any>{
  return this.http.post<any>('http://localhost:300/api/postSurveyResponse', responses);
    .pipe(
      catchError(this.handleError('addResponse', responses))
    );
}
 addSurvey(surveys: surveys) Observable<any>{
  return this.http.post<any>('http://localhost:300/api/newSurvey', surveys);
    .pipe(
      catchError(this.handleError('addResponse', surveys))
    );
}
}
