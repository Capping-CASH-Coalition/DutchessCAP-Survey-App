import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

import { GraphsComponent } from "./graphs.component";
import { graphsRoutes } from "./graphs.routes";
import { GraphService } from './graph.service';
import { Globals } from '../../globals';
import { FilterByGraphableQuestionPipe } from '../../pipes/filterGraphableQuestions.pipe'

@NgModule({
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(graphsRoutes)
   ],
   declarations: [
      GraphsComponent,
      FilterByGraphableQuestionPipe
   ],
   providers: [GraphService, Globals]
})
export class GraphsModule { }
