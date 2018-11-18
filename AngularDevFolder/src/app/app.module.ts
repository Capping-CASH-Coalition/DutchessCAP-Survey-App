// Angular/3rd party imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

// Component imports
import { AppComponent } from './app.component';
import { TopnavbarComponent } from "./components/topnavbar/topnavbar.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HomeComponent } from "./pages/home/home.component";
import { GraphsComponent } from "./pages/graphs/graphs.component";
import { SurveyComponent } from "./pages/survey/survey.component";
import { InputComponent } from "./pages/input/input.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { EditComponent } from "./pages/edit/edit.component";
import { ExportRawComponent } from './pages/exportRaw/exportRaw.component';

// Services/Pipes imports
import { SurveyService } from './services/survey.service';
import { GraphService } from './services/graph.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { KeysPipe } from './pipes/keys.pipe';
import { FilterByQuestionIDPipe } from "./pipes/filterQuestionId.pipe";
import { FilterByOptionActivePipe } from './pipes/filterByOptionActive.pipe';
import { FilterByDatePipe } from './pipes/filterByDate.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterBySurveyIdPipe } from './pipes/filterSurvey.pipe';
import { GraphableQuestionPipe } from './pipes/graphableQuestion.pipe';
import { ExceptQuestionIdPipe } from './pipes/exceptQuestionId.pipe';
import { FilterByQuestionActivePipe } from './pipes/filterByQuestionActive.pipe'


// Custom imports
import { appRoutes } from "./app.routes";
import { Globals } from './globals';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    // Declarations allow all components and pipes to be used through the project
   declarations: [
      AppComponent,
      NavigationComponent,
      TopnavbarComponent,
      HomeComponent,
      ContactComponent,
      EditComponent,
      ExportRawComponent,
      GraphsComponent,
      InputComponent,
      SurveyComponent,
      NotFoundComponent,
      KeysPipe,
      FilterByOptionActivePipe,
      FilterByQuestionIDPipe,
      FilterByDatePipe,
      FilterPipe,
      FilterBySurveyIdPipe,
      ContactComponent,
      EditComponent,
      ExportRawComponent,
      GraphableQuestionPipe,
      ExceptQuestionIdPipe,
      FilterByQuestionActivePipe
   ],
   // Imports bring in external modules such as core Angular modules
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      NgxPaginationModule,
      CommonModule
   ],
   // Providers allow all components to use the given services
   providers: [
       SurveyService, 
       GraphService, 
       AuthenticationService, 
       AuthGuardService, 
       Globals, 
       {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
   // Bootstrap is the first component loaded in the project
   bootstrap: [AppComponent]
})
export class AppModule { }