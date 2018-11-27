import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { SurveyService } from 'app/services/survey.service';
import { SurveyInfo } from '../../models/surveyInfo.model';
import { Question } from '../../models/question.model';
import { Option } from '../../models/option.model';

@Component({
   selector: 'app-edit',
   templateUrl: './edit.component.html',
   styleUrls: ['./edit.component.css'],
   providers: [SurveyService]
})

export class EditComponent implements OnInit {

   /*
      Edit Variables
   */

   // declare the survey form group holding all the values for the form
   survey: FormGroup;
   // Holds the dynamic survey variables for display
   surveys: Array<any> = [];
   lastSurveyId: number = 0;
   lastQuestionId: number = 0;
   lastOptionId: number = 0;
   // used to determine if the survey name is readonly or not
   nameReadOnly: boolean;

   constructor(private _fb: FormBuilder,
               public surveyService: SurveyService,
               private changeref: ChangeDetectorRef) { }

   // initilaize a new blank survey form
   ngOnInit() {
      this.newSurveyForm();
      this.surveyService.getSurveys().subscribe(response => {
            // Get 1 survey at a time and push into surveys array
            for (let i = 0; i < response.body.length; i++) {
                  let survey: SurveyInfo = {
                        "survey_id": response.body[i].survey_id,
                        "survey_name": response.body[i].survey_name,
                        "date_created": response.body[i].date_created,
                        "survey_is_active": response.body[i].survey_is_active
                  };
    
                  this.surveys.push(survey);
                  this.lastSurveyId++;
                  
                  
                  // Get the survey questions by selectedSurveyId
                  this.surveyService.getSurveyQuestions(this.surveys[i].survey_id).subscribe(response => {
                        // Initialize the questions
                        this.surveys[i].questions = [];
                        // Iterate through the questions and push them one at a time
                        for (let j = 0; j < response.body.length; j++) {
                              let question: Question = {
                                    "question_id": response.body[j].question_id,
                                    "question_text": response.body[j].question_text,
                                    "question_type": response.body[j].question_type,
                                    "question_is_active": response.body[j].question_is_active,
                                    options: []
                              };
                              this.surveys[i].questions.push(question);
                              this.lastQuestionId++;
                        }
                        
                        // Get the survey options based on the selectedSurveyId
                        this.surveyService.getSurveyOptions(this.surveys[i].survey_id).subscribe(response => {

                              for (let k = 0; k < this.surveys[i].questions.length; k++) {
                                    for (let l = 0; l < response.body.length; l++) {
                                          let option: Option = {
                                                "option_id": response.body[l].option_id,
                                                "option_text": response.body[l].option_text,
                                                "option_is_active": response.body[l].option_is_active,
                                                "question_id": response.body[l].question_id
                                          };
                                          // If the question IDs match, push the option into the questions[j].options array
                                          if (this.surveys[i].questions[k].question_id == response.body[l].question_id) {
                                                this.surveys[i].questions[k].options.push(option);
                                                this.lastOptionId++;
                                          }
                                    }
                              }
                        }, (error) => {
                              console.log('error is ', error)
                        }) 
                  },(error) => {
                        console.log('error is ', error)
                  })
            } 
      }, (error) => {
          console.log('error is ', error)
      })

   }
   
   // sets the survey name to readonly based on the edit global
   setReadOnly(): boolean {
      return this.nameReadOnly;
   }

   // sets the survey form to a blank survey
   newSurveyForm() {
      this.survey = this._fb.group({
            survey_id: new FormControl(''),
            survey_name: new FormControl(''),
            questions: this._fb.array([
                  this.initQuestion(),
            ])
      });
      this.nameReadOnly = false;
      jQuery("#surveySelect").val(-1);
   }

   // create a new blank question
   initQuestion() {
      return this._fb.group({
         question_text: new FormControl(''),
         question_type: new FormControl(''),
         options: this._fb.array([
            this.initOption(),
         ])
      });
   }

   // create a new blank option
   initOption() {
      return this._fb.group({
         option_text: new FormControl('')
      })
   }

   // add question to the form group array at the given index
   addQuestion(idx: number) {
      const control = <FormArray>this.survey.controls['questions'];
      control.insert(idx + 1, this.initQuestion());
      // Initialize a new question
      let newQuestion = {
            "question_text": "",
            "question_type": "",
            options: [{
                  "option_text": "",
            }]
      };
   }

   // remove question from the form group array at the given index
   removeQuestion(idx: number) {
      const control = <FormArray>this.survey.controls['questions'];
      control.removeAt(idx);
   }

   // add option to the form group array at the given index
   addOption(question, questionIndex: number): void {
      const control = <FormArray>question.controls.options;
      control.push(this.initOption());
      // Initialize a new option
      let newOption = {
            "option_text": ""
      };
   }

   // remove option from the form group array at the given index
   removeOption(question, optionIndex: number, questionIndex: number) {
      const control = <FormArray>question.controls.options;
      control.removeAt(optionIndex);
   }

   // checks the question type and returns boolean to display the options div
   showOptionsDiv(question): boolean {
      const questionType = <FormArray>question.controls.question_type.value;
      let ret: boolean;
      switch (questionType.toString()) {
         case "select":
            ret = true;
            break;
         case "checkbox":
            ret = true;
            break;
         case "radio":
            ret = true;
            break;
         case "text":
            ret = false;
            break;
         default:
            ret = true;
      }
      return ret;
   }

   // Used to update the formgroup from a given survey id
   updateSurveyFormData(survey_id) {
      let currSurvey;
      this.nameReadOnly = true;
      // loop through the surveys and set the current one to the one that mathches the id
      this.surveys.forEach(s => {
         currSurvey = s.survey_id == survey_id ? s : currSurvey;
      });
      // populate the survey form with proper data
      this.survey = this._fb.group({
         survey_id: new FormControl(currSurvey.survey_id),
         survey_name: new FormControl(currSurvey.survey_name),
         questions: this._fb.array([])
      });
      // patch the questions nested array value with the new questions
      this.patchFormQuestions(currSurvey.questions);
   }

   // used to update the questions of the form group qustions array
   patchFormQuestions(questions: any[]) {
      const control = <FormArray>this.survey.controls['questions'];
      questions.forEach(q => {
         if (q.question_is_active) {
            control.push(this._fb.group({
               question_text: new FormControl(q.question_text),
               question_type: new FormControl(q.question_type),
               options: this.patchFormOptions(q.options)
            }));
         }
      });
   }

   // used to update the options of the nested form group options array
   patchFormOptions(options) {
      let ops = new FormArray([]);
      options.forEach(o => {
         ops.push(this._fb.group({
            option_text: new FormControl(o.option_text)
         }));
      });
      return ops;
   }

   // Saves/Uploads the selected formData to the database
   save(formData) {
      // Get the survey index
      let surveyIndex = this.getSurveyIndex(formData);
      // Check if its a new survey
      console.log(surveyIndex);
      let question;
      let option;
      let architecture;
     if (surveyIndex == -1) {
            
             this.lastSurveyId++;
             let surveyName = { "survey_name": formData.survey_name };
             this.surveyService.postSurvey(surveyName).subscribe();
             
             for (let i = 0; i < formData.questions.length; i++) {

               question = {
                 "question_text": formData.questions[i].question_text,
                 "question_type": formData.questions[i].question_type
               };

               this.surveyService.postQuestion(question).subscribe();
               this.lastQuestionId++;
               this.surveyService.wait(50);
               for (let j = 0; j < formData.questions[i].options.length; j++) {
                 
                 option = {
                   "option_text": formData.questions[i].options[j].option_text,
                   "question_id": this.lastQuestionId
                 };
                 this.surveyService.wait(50);
                 this.surveyService.postOption(option).subscribe();
                 this.surveyService.wait(50);
                 this.lastOptionId++;
                 console.log("surveyId: " + this.lastSurveyId);
                 console.log("questionId: " + this.lastQuestionId);
                 console.log("optionId: " + this.lastOptionId);
                 architecture = {
                   "survey_id": this.lastSurveyId,
                   "question_id": this.lastQuestionId,
                   "option_id": this.lastOptionId
                 };

                 this.surveyService.postArchitecture(architecture).subscribe();
               }
             }
      // If index is not -1, this is an existing survey
     } else {
           for (let i = 0; i < this.surveys[surveyIndex].questions.length; i++) {
                 // // Check if questions active/inactive has changed, then update the database
                 if (formData.questions[i].question_is_active !== 
                     this.surveys[surveyIndex].questions[i].question_is_active) {
                        question = {
                              "question_id": formData.questions[i].question_id,
                              "question_is_active": formData.questions[i].question_is_active
                        };
                        this.surveyService.updateSurveyQuestionActive(question).subscribe();
                 }
                 // Check if options active/inactive has changed
                 for (let j = 0; j < this.surveys[surveyIndex].questions[i].options.length; j++) {
                        // If it has changed, update the database
                        if (formData.questions[i].options[j].option_is_active !== 
                              this.surveys[surveyIndex].questions[i].options[j].option_is_active) {
                                    option = {
                                          "option_id": formData.questions[i].options[j].option_id,
                                          "option_is_active": formData.questions[i].options[j].option_is_active
                                    };
                              this.surveyService.updateSurveyQuestionActive(option).subscribe();
                        }
                 }
                 // Check if there were options added
                 if (this.surveys[surveyIndex].questions[i].options.length < formData.questions[i].options.length) {
                       for (let m = this.surveys[surveyIndex].questions[i].options.length; m < formData.questions[i].options.length; m++) {
                             this.lastOptionId++;
                             option = {
                                    "option_text": formData.questions[i].options[m].option_text,
                                    "question_id": this.lastQuestionId
                              };
                              this.surveyService.postOption(option).subscribe();
                              this.surveyService.wait(50);
                              console.log("surveyId: " + this.surveys[surveyIndex].survey_id);
                              console.log("questionId: " + this.surveys[surveyIndex].questions[i].question_id);
                              console.log("optionId: " + this.lastOptionId);
                              architecture = {
                                    "survey_id": this.surveys[surveyIndex].survey_id,
                                    "question_id": this.surveys[surveyIndex].questions[i].question_id,
                                    "option_id": this.lastOptionId
                              };

                              this.surveyService.postArchitecture(architecture).subscribe();
                       }
                 }
           }
           // Check if there are new questions added
           if (this.surveys[surveyIndex].questions.length < formData.questions.length) {
                 for (let k = this.surveys[surveyIndex].questions.length; k < formData.questions.length; k++) {
                        this.lastQuestionId++;
                        question = {
                              "question_text": formData.questions[k].question_text,
                              "question_type": formData.questions[k].question_type
                        };
                        this.surveyService.postQuestion(question).subscribe();
                        this.surveyService.wait(50);

                        for (let l = 0; l < formData.questions[k].options.length; l++) {
                              this.lastOptionId++;
                              option = {
                                    "option_text": formData.questions[k].options[l].option_text,
                                    "question_id": this.lastQuestionId
                              };
                              this.surveyService.wait(50);
                              this.surveyService.postOption(option).subscribe();
                              this.surveyService.wait(50);
                              console.log("surveyId: " + this.surveys[surveyIndex].survey_id);
                              console.log("questionId: " + this.lastQuestionId);
                              console.log("optionId: " + this.lastOptionId);
                              architecture = {
                                    "survey_id": this.surveys[surveyIndex].survey_id,
                                    "question_id": this.lastQuestionId,
                                    "option_id": this.lastOptionId
                              };

                              this.surveyService.postArchitecture(architecture).subscribe();
                        }
                 }
           }
     }
     console.log(formData);
   }

   // Returns the surveyIndex that matches the formData.survey_id
   getSurveyIndex(formData) {
      let index;
      console.log("formData.survey_id" + formData.survey_id);
      if (formData.survey_id) {
            index = formData.survey_id - 1;
      } else {
            index = -1;
      }
      console.log("index" + index);
      return index;
   }

} 
