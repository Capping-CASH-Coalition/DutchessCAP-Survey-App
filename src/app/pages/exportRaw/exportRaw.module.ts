import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ExportRawComponent} from "./exportRaw.component";
import {exportRawRoutes} from "./exportRaw.routes";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(exportRawRoutes)
  ],
  declarations: [
    ExportRawComponent
  ],
})
export class ExportRawModule { }
