import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';

import { SurveyComponent } from "./survey.component";
import { surveyRoutes } from "./survey.routes";
import { FilterByQuestionIDPipe } from "./filterQuestionId.pipe"
import { FilterBySurveyIdPipe } from "./filterSurvey.pipe"
import { Globals } from './../../globals';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(surveyRoutes),
      NgxPaginationModule
  ],
  declarations: [
    SurveyComponent,
    FilterByQuestionIDPipe,
    FilterBySurveyIdPipe
  ],
  providers:[
    Globals
  ]
})
export class SurveyModule { }
