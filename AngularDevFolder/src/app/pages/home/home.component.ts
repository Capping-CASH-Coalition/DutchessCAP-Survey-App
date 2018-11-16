import { OnInit, Component } from "@angular/core";
import { Globals } from "../../globals";

@Component({
   selector: 'home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   constructor(
      public globals: Globals
   ) { };

   ngOnInit() {
   }

   // go through the surveys and get the info for the survey details card
   getSurveyInfo(): any[] {
      let surveyDetails: any[] = [];
      this.globals.surveys.forEach(survey => {
         let submissionCount = 0;
         // get the number of responses on each question of the survey
         survey.questions.map(q => { submissionCount += q.responses.length });
         // push details to array
         surveyDetails.push({
            name: survey.survey_name,
            date: survey.date_created,
            status: survey.is_active,
            // round down the operation of the the total submissions divided by the number of questions, parse to string for formatting
            submissions: Math.round(submissionCount / survey.questions.length).toLocaleString(),
         })
      });
      return surveyDetails;
   }

}