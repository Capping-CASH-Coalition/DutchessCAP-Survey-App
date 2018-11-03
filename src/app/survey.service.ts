import { Injectable } from '@angular/core';
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

  getOptions() {
    return this.http.get<any>('http://localhost:3000/api/option');
  }

}
