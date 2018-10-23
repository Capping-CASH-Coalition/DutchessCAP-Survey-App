import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { OpenEndedDataComponent } from "./openEndedData.component";
import {openEndedDataRoutes} from "./openEndedData.routes";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(openEndedDataRoutes)
  ],
  declarations: [
    OpenEndedDataComponent
  ],
})
export class OpenEndedDataModule { }
