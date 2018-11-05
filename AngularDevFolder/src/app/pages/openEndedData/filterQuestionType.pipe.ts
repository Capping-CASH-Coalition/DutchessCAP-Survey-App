import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'filterByQuestionType'
})

export class FilterByQuestionTypePipe implements PipeTransform {

    transform(questions : any, type: string): any[] {
        if (questions) {
            return questions.filter((question: any) => question.question_type === type);
        }
    }
}