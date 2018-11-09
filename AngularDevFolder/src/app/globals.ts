import { Injectable } from '@angular/core';
import { SurveyService } from '../app/survey.service';

@Injectable()
export class Globals {

    public version: number = 1;
    public yearCreated: Date = new Date(2018);
    public surveyTakenId: number;
    public name: string = "Questionnaire_Test";
    
    public questions: Array<any> = [ {question_id: 1, question_num: 1, question_text: "What services do you need?", question_type: "checkbox"},
                                     {question_id: 2, question_num: 2, question_text: "What city are you from?", question_type: "select"},
                                     {question_id: 3, question_num: 3, question_text: "Additional comments:", question_type: "text"},
                                     {question_id: 4, question_num: 4, question_text: "How can this survey be better?", question_type: "text"},
                                     {question_id: 5, question_num: 5, question_text: "In a few words, describe capping:", question_type: "text"}];

   public options: Array<any> = [{ question_id: 1, option_num: 1, option_text: "CASH", option_id: 1 },
                                 { question_id: 1, option_num: 2, option_text: "Dress for success", option_id: 2 },
                                 { question_id: 1, option_num: 3, option_text: "Food Pantry", option_id: 3 },
                                 { question_id: 2, option_num: 1, option_text: "Hyde Park", option_id: 4 },
                                 { question_id: 2, option_num: 2, option_text: "Poughkeepsie", option_id: 5 },
                                 { question_id: 2, option_num: 3, option_text: "Wappingers", option_id: 6 },
                                 { question_id: 3, option_num: 1, option_text: "Response:", option_id: 7 }];

   public responses: Array<any> = [ { version: 1, surveyTakenId: 1, question_id: 1, response_id: 1, response_text: "Dress for success" },
                                    { version: 1, surveyTakenId: 1, question_id: 1, response_id: 2, response_text: "CASH" },
                                    { version: 1, surveyTakenId: 1, question_id: 2, response_id: 3, response_text: "Hyde Park" },
                                    { version: 1, surveyTakenId: 1, question_id: 3, response_id: 4, response_text: "This survey rocks!" },
                                    { version: 1, surveyTakenId: 1, question_id: 4, response_id: 5, response_text: "This survey website is perfect!" },
                                    { version: 1, surveyTakenId: 1, question_id: 4, response_id: 6, response_text: "The survey could not be any better!" },
                                    { version: 1, surveyTakenId: 1, question_id: 5, response_id: 7, response_text: "Capping is so much fun!" },
                                    { version: 1, surveyTakenId: 1, question_id: 5, response_id: 8, response_text: "Capping is ruining my life!" }];
   personId: number;
   yearTaken: Date;
   email: string;
   firstName: string;
   lastName: string;


   public questionResponseData: Array<any> = this.getQuestionResponseData();


   private getQuestionResponseData(): Array<any> {
      let questionResponseDataReturn: Array<any> = [];
      this.questions.forEach(question => {
         let data = { question_id: 0, question_type: '', question_text: '', responses: [] };
         data.question_id = question.question_id;
         data.question_text = question.question_text;
         data.question_type = question.question_type;
         this.responses.forEach(response => {
            if (question.question_id === response.question_id) {
               data.responses.push(response.response_text);
            };
         })
         questionResponseDataReturn.push(data);
      });
      return questionResponseDataReturn;
   }


   public surveys: Array<any> = [
      {
         survey_id: 0,
         survey_name: "Lindas Survey",
         date_created: "11-01-2018",
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
               ]
            },
            {
               question_id: 2,
               question_text: "Select the services that you need: ",
               question_type: "checkboxes",
               question_active: false,
               options: [
                  { option_id: 10, option_text: "More Money", option_active: false },
                  { option_id: 11, option_text: "More Time", option_active: true },
                  { option_id: 12, option_text: "More Clothes", option_active: true },
                  { option_id: 13, option_text: "Less capping work", option_active: true },
                  { option_id: 14, option_text: "Less drinking", option_active: false }
               ]
            }
         ]
      },
      {
         survey_id: 1,
         survey_name: "Alogzzines Survey",
         date_created: "11-02-2018",
         questions: [
            {
               question_id: 3,
               question_text: "How much do you love capping? ",
               question_type: "dropdown",
               question_active: true,
               options: [
                  { option_id: 15, option_text: "Its awesome", option_active: true },
                  { option_id: 16, option_text: "Its ight", option_active: true },
                  { option_id: 17, option_text: "Its miserable", option_active: true },
               ]
            },
            {
               question_id: 4,
               question_text: "Please elaborate on the previous answer",
               question_type: "text",
               question_active: true,
               options: [{ option_id: -1, option_text: "TEXT RESPONSE", option_active: false },]
            }
         ]
      }
   ]


   /*
   ~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~

   constructor(private surveyService: SurveyService) {
       
       
       this.surveyService.getQuestions().subscribe((response)=>{
           this.questions = [];
           console.log('response is ', response);
           for (let i = 0; i < response.length; i++) {
           if (response[i].survey_version == 1) {
               this.version = 1;
               let qArray = 
               {"question_num": response[i].question_num, 
               "question_id": response[i].question_id, 
               "question_text": response[i].question_text, 
               "question_type": response[i].question_type}
               ;
               this.questions.push(qArray);
           }
           }
           console.log(this.questions);
           this.surveyService.getOptions().subscribe((response)=>{
           this.options = [];
           console.log('response is ', response);
           for (let i = 0; i < this.questions.length; i++) {
               console.log(response[i]);
               for (let j = 0; j < response.length; j++) {
               if (response[j].question_id == this.questions[i].question_id) {
                   let rArray = [
                   {"option_id": response[i].option_id, 
                   "option_num": response[i].option_num, 
                   "option_text": response[i].option_text}
                   ];
                   this.options.push(rArray);
               }
               }
           }
           //console.log(this.options);
           },(error) => {
               console.log('error is ', error)
           })
       },(error) => {
           console.log('error is ', error)
       })
    }
    ~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~
    */

}
