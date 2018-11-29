import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'filterByDate'
})

export class FilterByDatePipe implements PipeTransform {

    transform(responses : any, date: Date): any[] {
        if (responses) {
            return responses.filter((response: any) => response.date_taken >= date);
        }
    }
}