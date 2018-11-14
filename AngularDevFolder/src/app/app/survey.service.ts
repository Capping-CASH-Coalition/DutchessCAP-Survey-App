import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class SurveyService {
  /*httpOptions: any = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };*/


  constructor(private http: HttpClient) { }

  

  getSurveyQuestions(survey_name) {
    return this.http.get<any>('http://localhost:3000/api/surveyQuestions/' + survey_name);
  }

  getSurveyResponses(survey_name) {
    return this.http.get<any>('http://localhost:3000/api/surveyResponses/' + survey_name);
  }

  
  postSurveyResponse(response) {
  
    return this.http.post<any>('http://localhost:3000/api/postSurveyResponse', response, httpOptions);
  }

  postNewSurvey(surveys) {
    const params = new HttpParams()
      .set('surveys', surveys);
    return this.http.post<any>('http://localhost:3000/api/newSurvey', surveys);
   
  }


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

 /* insertSurveyOptions(updates) {
    
    return this.http.post<any>('http://localhost:3000/api/insertSurveyOptions');
  }*/

 
}



