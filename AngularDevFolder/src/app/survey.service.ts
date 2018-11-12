import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SurveyService {

  constructor(private http: HttpClient) { }

  

  getSurveyQuestions(survey_name) {
    const params = new HttpParams()
      .set('survey_name', survey_name);
    return this.http.get<any>('http://localhost:3000/api/surveyQuestions', { params });
  }

  getSurveyResponses(survey_name) {
    const params = new HttpParams()
      .set('survey_name', survey_name);
    return this.http.get<any>('http://localhost:3000/api/surveyResponses', { params });
  }

  
  postSurveyResponses(responses) {
    const params = new HttpParams()
      .set('responses', responses);
    return this.http.post<any>('http://localhost:3000/api/postSurveyResponse', { params });
  }

  postNewSurvey(surveys) {
    const params = new HttpParams()
      .set('surveys', surveys);
    return this.http.post<any>('http://localhost:3000/api/newSurvey', { params });
   
  }


  updateSurveyQuestions(updates) {
    const params = new HttpParams()
      .set('updates', updates);
    return this.http.post<any>('http://localhost:3000/api/updateSurveyQuestions', { params });
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

  insertSurveyOptions(updates) {
    const params = new HttpParams()
      .set('updates', updates);
    return this.http.post<any>('http://localhost:3000/api/insertSurveyOptions', { params });
  }

 
}



