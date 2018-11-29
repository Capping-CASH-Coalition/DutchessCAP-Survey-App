import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'ActiveOptions'
})

export class FilterByOptionActivePipe implements PipeTransform {

    transform(options : any): any[] {
        if (options) {
            return options.filter((option: any) => option.option_is_active === true);
        }
    }

}