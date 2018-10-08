import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {EditComponent} from "./edit.component";
import {editRoutes} from "./edit.routes";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(editRoutes)
  ],
  declarations: [
    EditComponent
  ],
})
export class EditModule { }
