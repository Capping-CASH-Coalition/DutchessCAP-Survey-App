import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { OpenEndedDataComponent } from "./openEndedData.component";
import { openEndedDataRoutes } from "./openEndedData.routes";
import { FilterPipe } from './filter.pipe';
import { FilterByQuestionTypePipe } from './filterQuestionType.pipe'
import { Globals } from '../../globals';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(openEndedDataRoutes)
  ],
  declarations: [
    OpenEndedDataComponent,
    FilterPipe,
    FilterByQuestionTypePipe
  ],
  providers: [
   Globals
 ]
})
export class OpenEndedDataModule { }
