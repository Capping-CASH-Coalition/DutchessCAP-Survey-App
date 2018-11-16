import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ExceptQuestionId'
})
export class ExceptQuestionIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
