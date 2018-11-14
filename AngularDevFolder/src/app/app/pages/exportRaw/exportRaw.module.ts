import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ExportRawComponent } from "./exportRaw.component";
import { exportRawRoutes } from "./exportRaw.routes";
import { Globals } from '../../globals';
import { FilterByDatePipe } from '../../pipes/filterByDate.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(exportRawRoutes)
   ],
   declarations: [
      ExportRawComponent,
      FilterByDatePipe,
      FilterPipe
   ],
   providers: [
      Globals
   ]
})
export class ExportRawModule { }
