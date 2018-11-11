import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { FormBuilder, FormGroup, FormArray, FormControl, FormControlName } from '@angular/forms';

@Component({
   selector: 'app-input',
   templateUrl: './input.component.html',
   styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
   
   constructor(
      private _fb: FormBuilder,
      private globals: Globals
   ) { };

   survey;
   surveyForm: FormGroup;


   ngOnInit() {
      this.survey = this.globals.surveys[0];
   }

   
   updateSurvey(sid){
      this.survey = this.globals.surveys[sid];
      console.log(this.survey);
   }
}
