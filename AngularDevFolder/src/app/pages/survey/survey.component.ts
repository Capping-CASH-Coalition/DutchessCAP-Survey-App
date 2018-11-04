import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  log(x) {
    console.log(x);
  }

  constructor ( private httpeService: HttpClient ) { }
    answers: string[];

    ngOnInit () {
    this.httpeService.get('./assets/data/data.json').subscribe(
      data => {
        this.answers = data as string [];
        // console.log(this.answers[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    )
  }
}
