import { Question } from './question.model';

export class Survey {
    
    survey_id: number;
    survey_name: string;
    date_created: string;
    questions: Array<Question>;
 
}