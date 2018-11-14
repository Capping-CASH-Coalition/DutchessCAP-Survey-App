import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'ExceptQuestionId'
})

export class FilterQuestionIdPipe implements PipeTransform {

    transform(questions : any, questionId: number ): any[] {
        if (questions) {
            return questions.filter((question: any) => question.question_id != questionId);
        }
    }
}