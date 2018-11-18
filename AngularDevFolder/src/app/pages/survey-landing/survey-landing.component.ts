import { Globals } from '../../globals';
import { Component} from '@angular/core';
import { stringify } from 'querystring';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveyLanding',
  templateUrl: './survey-landing.component.html',
  styleUrls: ['./survey-landing.component.css'],
})

export class SurveyLandingComponent {

constructor(private globals: Globals,
            public router: Router) { }

  test = [];
  selectedVersion: number;

  onStart(){
    this.router.navigate(['survey']);
    //this.test.push(start.value);
    //console.log(this.test[0]);
  }
  surveySelect($event, value){
  this.selectedVersion = value;
  console.log(this.selectedVersion);
  }

}