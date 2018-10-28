import { Component } from '@angular/core';
import { Login } from "./models/login";
import { Chart } from "../../node_modules/@types/chart.js";
import { SurveyService } from '../app/survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SurveyService]
})
export class AppComponent {
  loginInfo:Login = {
      first_name:'Linda',
      last_name:'Eddy',
      avatar:'ay.jpeg',
      title:'Admin'
  };
}
