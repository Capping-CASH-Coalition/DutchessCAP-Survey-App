import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ArchiveComponent} from "./archive.component";
import {archiveRoutes} from "./archive.routes";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(archiveRoutes)
  ],
  declarations: [
    ArchiveComponent
  ],
})
export class ArchiveModule { }
