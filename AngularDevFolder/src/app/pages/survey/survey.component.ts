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

  Data: Array<any> = [];

  uploadData(){
    this.globals.responses.push(this.Data);
    console.log(this.globals.responses[9]);
  }

  changeData(event, r: string){
    this.Data.push([this.globals.version,1,1,1,r]);
    console.log(this.Data[2]);
  }
}

