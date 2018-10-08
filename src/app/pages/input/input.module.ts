import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {InputComponent} from "./input.component";
import {inputRoutes} from "./input.routes";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(inputRoutes)
  ],
  declarations: [
    InputComponent
  ],
})
export class InputModule { }
