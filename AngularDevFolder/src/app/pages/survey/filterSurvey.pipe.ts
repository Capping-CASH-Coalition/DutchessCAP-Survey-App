import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'filterBySurveyID'
})

export class FilterBySurveyIdPipe implements PipeTransform {

    transform(surveys : any, surveyID: string): any[] {
        if (surveys) {
            return surveys.filter((survey: any) => survey.survey_id == surveyID);
        }
    }
}