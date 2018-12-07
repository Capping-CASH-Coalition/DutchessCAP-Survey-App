import { Question } from './question.model';

// Defines a survey
export class Survey {
    
    survey_id: number;
    survey_name: string;
    date_created: string;
    questions?: Array<Question>;
    response_count?: number;
    survey_is_active?: boolean;
 
}