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
  getSurveyOptions(survey_name) {
    return this.http.get<any>('http://localhost:3000/api/surveyOptions/' + survey_name);
  }

  getSurveyResponses(survey_name) {
    return this.http.get<any>('http://localhost:3000/api/surveyResponses/' + survey_name);
  }


  postSurveyResponse(response) {

    return this.http.post<any>('http://localhost:3000/api/postSurveyResponse', JSON.stringify(response), httpOptions);
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

