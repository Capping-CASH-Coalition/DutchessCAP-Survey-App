import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Topnavbar } from "./components/topnavbar/topnavbar.component";
import { Navigation } from "./components/navigation/navigation.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { HomeComponent } from "./pages/home/home.component";
import { SurveyService } from './survey.service';
import { KeysPipe } from './pipes/keys.pipe';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
   declarations: [
      AppComponent,
      Navigation,
      Topnavbar,
      HomeComponent,
      KeysPipe
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [SurveyService, AppComponent, {provide: LocationStrategy, useClass: HashLocationStrategy}],
   bootstrap: [AppComponent]
})
export class AppModule { }
