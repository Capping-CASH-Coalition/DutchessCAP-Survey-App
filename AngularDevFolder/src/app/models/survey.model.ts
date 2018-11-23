import { Question } from './question.model';
import { Response} from './response.model';

export class Survey {
    
    survey_id: number;
    survey_name: string;
    date_created: string;
    questions: Array<Question>;
    responses: Array<Response>;
 
}