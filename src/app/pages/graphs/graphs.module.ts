import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
//import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import {GraphsComponent} from "./graphs.component";
import {graphsRoutes} from "./graphs.routes";

@NgModule({
  imports: [
      CommonModule,
      //FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(graphsRoutes)
  ],
  declarations: [
    GraphsComponent
  ],
})
export class GraphsModule { }
