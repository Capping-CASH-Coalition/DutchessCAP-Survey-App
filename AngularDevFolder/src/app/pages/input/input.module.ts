import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from "./input.component";
import { inputRoutes } from "./input.routes";
import { Globals } from '../../globals';
import { FilterByQuestionActivePipe } from '../../pipes/filterByQuestionActive.pipe'

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(inputRoutes)
   ],
   declarations: [
      InputComponent,
      FilterByQuestionActivePipe
   ],
   providers: [
      Globals
   ]
})
export class InputModule { }
