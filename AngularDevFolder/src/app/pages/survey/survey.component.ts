import { Globals } from './../../globals';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { global } from '@angular/core/src/util';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})

export class SurveyComponent {
  constructor(private globals: Globals) {}

  Data = [1, 1, 6, 9, "hello"];

  uploadData(){
    this.globals.responses.push(this.Data);
    console.log(this.globals.responses[9])
  }
}

