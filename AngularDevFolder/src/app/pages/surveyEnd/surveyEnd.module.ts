import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { SurveyComponent } from "./surveyEnd.component";
import { surveyEndRoutes } from "./surveyEnd.routes";
import { Globals } from '../../globals';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(surveyEndRoutes),
      NgxPaginationModule
  ],
  declarations: [
    SurveyComponent,
  ],
  providers:[
    Globals
  ]
})
export class SurveyEndModule { }
