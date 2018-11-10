import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { InputComponent } from "./input.component";
import { inputRoutes } from "./input.routes";
import { Globals } from '../../globals';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(inputRoutes)
   ],
   declarations: [
      InputComponent
   ],
   providers: [
      Globals
   ]
})
export class InputModule { }
