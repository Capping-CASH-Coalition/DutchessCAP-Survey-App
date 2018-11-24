import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

   public surveys: Array<any> = [
      {
         survey_id: 0,
         survey_name: "Lindas Survey",
         date_created: "2018-02-13",
         questions: [
            {
               question_id: 0,
               question_text: "What is your favorite color?",
               question_type: "dropdown",
               question_active: true,
               options: [
                  { option_id: 0, option_text: "Red", option_active: true },
                  { option_id: 1, option_text: "White", option_active: true },
                  { option_id: 2, option_text: "Pink", option_active: true },
                  { option_id: 3, option_text: "Blue", option_active: true },
                  { option_id: 4, option_text: "Yellow", option_active: false }
               ],
               responses: [
                  { response_id: 0, response_text: "Red", date_taken: "2018-11-02"},
                  { response_id: 1, response_text: "White", date_taken: "2018-11-02"},
                  { response_id: 2, response_text: "Pink", date_taken: "2018-11-02"},
                  { response_id: 3, response_text: "Blue", date_taken: "2018-11-02"},
                  { response_id: 4, response_text: "White", date_taken: "2018-11-02"},
                  { response_id: 5, response_text: "White", date_taken: "2018-11-02"},
                  { response_id: 6, response_text: "Yellow", date_taken: "2018-11-02"},
                  { response_id: 7, response_text: "Blue", date_taken: "2018-11-02"},
                  { response_id: 8, response_text: "Pink", date_taken: "2018-11-02"},
               ]
            },
            {
               question_id: 1,
               question_text: "What is your favorite City?",
               question_type: "mc",
               question_active: true,
               options: [
                  { option_id: 5, option_text: "New York City", option_active: true },
                  { option_id: 6, option_text: "Boston", option_active: true },
                  { option_id: 7, option_text: "Washington", option_active: false },
                  { option_id: 8, option_text: "Miami", option_active: true },
                  { option_id: 9, option_text: "Poughkeepsie", option_active: true }
               ],
               responses: [
                  { response_id: 9, response_text: "New York City", date_taken: "2018-11-02"},
                  { response_id: 10, response_text: "Boston", date_taken: "2018-11-02"},
                  { response_id: 11, response_text: "New York City", date_taken: "2018-11-02"},
                  { response_id: 12, response_text: "Washington", date_taken: "2018-11-02"},
                  { response_id: 13, response_text: "Poughkeepsie", date_taken: "2018-11-02"},
                  { response_id: 14, response_text: "Poughkeepsie", date_taken: "2018-11-02"},
                  { response_id: 15, response_text: "New York City", date_taken: "2018-11-02"},
                  { response_id: 16, response_text: "Miami", date_taken: "2018-11-02"},
                  { response_id: 17, response_text: "Boston", date_taken: "2018-11-02"},
               ]
            },
            {
               question_id: 2,
               question_text: "Select the services that you need: ",
               question_type: "checkboxes",
               question_active: true,
               options: [
                  { option_id: 10, option_text: "More Money", option_active: false },
                  { option_id: 11, option_text: "More Time", option_active: true },
                  { option_id: 12, option_text: "More Clothes", option_active: true },
                  { option_id: 13, option_text: "Less capping work", option_active: true },
                  { option_id: 14, option_text: "Less drinking", option_active: false }
               ],
               responses: [
                  { response_id: 18, response_text: "More Time", date_taken: "2018-11-02"},
                  { response_id: 19, response_text: "More Time", date_taken: "2018-11-02"},
                  { response_id: 20, response_text: "More Money", date_taken: "2018-11-02"},
                  { response_id: 21, response_text: "Less drinking", date_taken: "2018-11-02"},
                  { response_id: 22, response_text: "Less capping work", date_taken: "2018-11-02"},
                  { response_id: 23, response_text: "Less capping work", date_taken: "2018-11-02"},
                  { response_id: 24, response_text: "More Money", date_taken: "2018-11-02"},
                  { response_id: 25, response_text: "More Clothes", date_taken: "2018-11-02"},
                  { response_id: 26, response_text: "Less capping work", date_taken: "2018-11-02"},
               ]
            }
         ]
      }
   ]
}
