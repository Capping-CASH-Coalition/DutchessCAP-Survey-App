import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'filterByDate'
})

export class FilterBySurveyIdPipe implements PipeTransform {

    transform(responses : any, date: Date): any[] {
        if (responses) {
            return responses.filter((response: any) => response.date >= date);
        }
    }
}