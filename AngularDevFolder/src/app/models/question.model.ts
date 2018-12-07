import { Option } from './option.model';
import { Response } from './response.model';

// Defines a question
export class Question {
    
    question_id: number;
    question_text: string;
    question_type: string
    question_is_active: boolean;
    options?: Array<Option>;
    responses?: Array<Response>;

}