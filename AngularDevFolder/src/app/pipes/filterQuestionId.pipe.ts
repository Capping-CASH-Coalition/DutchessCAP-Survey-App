import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'filterByQuestionID'
})

export class FilterByQuestionIDPipe implements PipeTransform {

    transform(options : any, questionID: string): any[] {
        if (options) {
            return options.filter((option: any) => option.question_id == questionID);
        }
    }
}