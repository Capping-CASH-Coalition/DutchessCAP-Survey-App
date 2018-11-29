import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'ActiveQuestions'
})

export class FilterByQuestionActivePipe implements PipeTransform {

    transform(questions : any): any[] {
        if (questions) {
            return questions.filter((question: any) => question.question_is_active === true);
        }
    }
}