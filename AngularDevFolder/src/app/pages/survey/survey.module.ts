import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import { SurveyComponent } from "./survey.component";
import { surveyRoutes } from "./survey.routes";
import { FilterByQuestionIDPipe } from "../../pipes/filterQuestionId.pipe"
import { FilterBySurveyIdPipe } from "../../pipes/filterSurvey.pipe"
import { Globals } from './../../globals';
import { FilterByQuestionActivePipe} from '../../pipes/filterByQuestionActive.pipe';
import { FilterByOptionActivePipe } from '../../pipes/filterByOptionActive.pipe'

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
    FilterBySurveyIdPipe,
    FilterByQuestionActivePipe,
    FilterByOptionActivePipe
  ],
  providers:[
    Globals
  ]
})
export class SurveyModule { }
