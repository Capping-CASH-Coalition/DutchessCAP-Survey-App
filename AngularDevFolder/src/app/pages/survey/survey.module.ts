import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SurveyComponent } from "./survey.component";
import { surveyRoutes } from "./survey.routes";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(surveyRoutes)
  ],
  declarations: [
    SurveyComponent
  ],
})
export class SurveyModule { }
