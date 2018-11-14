import { Globals } from '../../globals';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-surveyEnd',
  templateUrl: './surveyEnd.component.html',
  styleUrls: ['./surveyEnd.component.css'],
})

export class SurveyComponent {

  data = [];

  onSubmit(end: NgForm){
    
    this.data.push(end.value);
    console.log(this.data[0]);
  }

}