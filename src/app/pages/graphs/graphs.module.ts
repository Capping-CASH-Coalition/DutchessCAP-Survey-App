import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { Chart } from "../../../../node_modules/@types/chart.js";

import {GraphsComponent} from "./graphs.component";
import {graphsRoutes} from "./graphs.routes";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(graphsRoutes)
  ],
  declarations: [
    GraphsComponent
  ],
})
export class GraphsModule { }
