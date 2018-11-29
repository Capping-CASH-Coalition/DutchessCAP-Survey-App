import { Option } from './option.model';
import { Response } from './response.model'

export class QuestionResponses {
    
    question_id: number;
    question_text: string;
    question_type: string
    question_is_active: boolean;
    options: Array<Option>;
    responses: Array<Response>;

}