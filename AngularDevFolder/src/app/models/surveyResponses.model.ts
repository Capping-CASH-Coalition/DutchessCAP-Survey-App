import { QuestionResponses } from './questionResponses.model';

export class SurveyResponses {

    survey_id: number;
    survey_name: string;
    date_created: string;
    questions: Array<QuestionResponses>;
 
}