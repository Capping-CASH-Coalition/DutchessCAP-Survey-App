import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GraphableQuestion'
})
export class GraphableQuestionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
