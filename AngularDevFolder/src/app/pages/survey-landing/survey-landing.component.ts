import { Globals } from '../../globals';
import { Component} from '@angular/core';
import { stringify } from 'querystring';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-surveyLanding',
  templateUrl: './survey-landing.component.html',
  styleUrls: ['./survey-landing.component.css'],
})

export class SurveyLandingComponent {

constructor(private globals: Globals) { }

  test = [];
  selectedVersion: number;

  /*onStart(start: NgForm){
    this.test.push(start.value);
    console.log(this.test[0]);
  }
*/
  surveySelect($event, value){
  this.selectedVersion = value;
  console.log(this.selectedVersion);
  }

}