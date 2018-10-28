import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SurveyService {

  constructor(private http: HttpClient) { }

  getSurvey() {
    return this.http.get<any>('http://localhost:3000/api/survey');
  }

  getQuestions() {
    return this.http.get<any>('http://localhost:3000/api/question');
  }

  getResponses() {
    return this.http.get<any>('http://localhost:3000/api/response');
  }

}
