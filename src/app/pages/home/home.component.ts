import {OnInit, Component} from "@angular/core";
import { SurveyService } from '../../survey.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [SurveyService]
})
export class HomeComponent implements OnInit {
    constructor(private surveyService: SurveyService) { }

    ngOnInit() {
        this.surveyService.getQuestions().subscribe((response)=>{
            console.log('response is ', response)
        },(error) => {
            console.log('error is ', error)
        })
    }
}