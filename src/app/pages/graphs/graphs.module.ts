import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

import {GraphsComponent} from "./graphs.component";
import {graphsRoutes} from "./graphs.routes";
import { Globals } from "../../globals"

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(graphsRoutes),
  ],
  declarations: [
    GraphsComponent
  ],
  providers: [
    Globals
  ]
})
export class GraphsModule { }
