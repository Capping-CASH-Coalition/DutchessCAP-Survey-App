import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from "./components/topnavbar/topnavbar.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { HomeComponent } from "./pages/home/home.component";
import { SurveyService } from './survey.service';
import { KeysPipe } from './pipes/keys.pipe';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { FilterByQuestionActivePipe } from './pipes/filterByQuestionActive.pipe';
import { GraphsComponent } from "./pages/graphs/graphs.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from "./pages/input/input.component";
import { Globals } from './globals';
import { NgxPaginationModule } from 'ngx-pagination';
import { SurveyComponent } from "./pages/survey/survey.component";
import { FilterByQuestionIDPipe } from "./pipes/filterQuestionId.pipe";
import { FilterBySurveyIdPipe } from "./pipes/filterSurvey.pipe";
import { FilterByOptionActivePipe } from './pipes/filterByOptionActive.pipe';
import { FilterByDatePipe } from './pipes/filterByDate.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from "./pages/contact/contact.component";
import { EditComponent } from "./pages/edit/edit.component";
import { ExportRawComponent } from './pages/exportRaw/exportRaw.component';


@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      TopnavbarComponent,
      HomeComponent,
      KeysPipe,
      GraphsComponent,
      FilterByQuestionActivePipe,
      InputComponent,
      SurveyComponent,
      FilterByOptionActivePipe,
      FilterByQuestionIDPipe,
      FilterBySurveyIdPipe,
      FilterByDatePipe,
      FilterPipe,
      ContactComponent,
      EditComponent,
      ExportRawComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      NgxPaginationModule
   ],
   providers: [SurveyService, Globals, {provide: LocationStrategy, useClass: HashLocationStrategy}],
   bootstrap: [AppComponent]
})
export class AppModule { }