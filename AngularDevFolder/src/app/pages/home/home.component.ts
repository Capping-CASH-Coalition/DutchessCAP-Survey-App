import {OnInit, Component} from "@angular/core";
import { Globals } from "../../globals";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   constructor(
      private globals: Globals
   ) { };

    ngOnInit() {
    }

   getSurveyInfo(): any[] {
      let surveyDetails: any[] = [];
       this.globals.surveys.forEach(survey => {
         let submissionCount = 0;
         survey.questions.map(q => { submissionCount += q.responses.length});
         surveyDetails.push({
            name: survey.survey_name,
            date: survey.date_created,
            status: survey.is_active,
            submissions: Math.round(submissionCount / survey.questions.length).toLocaleString(),
         })
       });
       return surveyDetails;
    }
    
}