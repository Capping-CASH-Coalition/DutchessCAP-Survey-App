import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { SurveyService } from 'app/services/survey.service';
import { Survey } from '../../models/survey.model';
import { Question } from '../../models/question.model';
import { Option } from '../../models/option.model';
import { Router } from '@angular/router';
import { AnonymousSubscription } from 'rxjs/Subscription';

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
   // Helps determine where to allow add/remove questions and options
   currentQuestionScope: number;
   currentOptionScope: Array<number>;
   // Last IDs in the database
   lastSurveyId: number = 0;
   lastQuestionId: number = 0;
   lastOptionId: number = 0;
   // used to determine if the survey name is readonly or not
   nameReadOnly: boolean;
   // hold off on displaying div until this is true after data loaded
   isNewSurvey: boolean;
   // modal id holder
   modal;

  constructor( public router: Router,
               private _fb: FormBuilder,
               public surveyService: SurveyService) { }

   // initilaize a new blank survey form
  ngOnInit(): void {
      //Check if the user has authentication to use this page
      this.hasAuthentication();
      // Get the modal
      this.modal = document.getElementById('success');
      this.newSurveyForm();
      this.surveyService.getAllSurveys().subscribe(response => {
            // Get 1 survey at a time and push into surveys array
            for (let i = 0; i < response.body.length; i++) {
                  let survey: Survey = {
                        "survey_id": response.body[i].survey_id,
                        "survey_name": response.body[i].survey_name,
                        "date_created": response.body[i].date_created,
                        "survey_is_active": response.body[i].survey_is_active
                  };
    
                  this.surveys.push(survey);
                  this.lastSurveyId++;
                  
                  // Get the survey questions by selectedSurveyId
                  this.surveyService.getAllSurveyQuestions(this.surveys[i].survey_id).subscribe(response => {
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
                        this.surveyService.getAllSurveyOptions(this.surveys[i].survey_id).subscribe(response => {

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
                              //console.log('error is ', error)
                        }) 
                  },(error) => {
                        //console.log('error is ', error)
                  })
            }
      }, (error) => {
          //console.log('error is ', error)
      })
  }

  hasAuthentication(): void {
    if (localStorage.getItem('login') != 'success') {
      this.router.navigate(['/survey']);
  }
}
   
   // sets the survey name to readonly based on the edit global
   setReadOnly(): boolean {
      return this.nameReadOnly;
   }

   // sets the survey form to a blank survey
   newSurveyForm(): void {
      this.isNewSurvey = true;
      this.currentQuestionScope = -1;
      this.currentOptionScope = [-1];
      
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
   initQuestion(): any {
      return this._fb.group({
         question_is_active: new FormControl({value: true, disabled: true}),
         question_text: new FormControl(''),
         question_type: new FormControl(''),
         options: this._fb.array([
            this.initOption(),
         ])
      });
   }

   // create a new blank option
   initOption(): any {
      this.currentOptionScope.push(-1);
      return this._fb.group({
         option_is_active: new FormControl({value: true, disabled: true}),
         option_text: new FormControl('')
      })
   }

   // add question to the form group array at the given index
   addQuestion(idx: number): void {
      const control = <FormArray>this.survey.controls['questions'];
      control.insert(idx + 1, this.initQuestion());
   }

   // remove question from the form group array at the given index
   removeQuestion(idx: number): void {
      const control = <FormArray>this.survey.controls['questions'];
      control.removeAt(idx);
   }

   // add option to the form group array at the given index
   addOption(question, questionIndex: number): void {
      const control = <FormArray>question.controls.options;
      control.push(this.initOption());
      if (this.isNewSurvey) {
            this.currentOptionScope.push(-1);
      }
   }

   // remove option from the form group array at the given index
   removeOption(question, optionIndex: number, questionIndex: number): void {
      const control = <FormArray>question.controls.options;
      control.removeAt(optionIndex);
      if (this.isNewSurvey) {
            this.currentOptionScope.pop();
      }
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
   updateSurveyFormData(survey_id): void {
      this.isNewSurvey = false;
      let currSurvey;
      this.nameReadOnly = true;
      // loop through the surveys and set the current one to the one that mathches the id
      this.surveys.forEach(s => {
         currSurvey = s.survey_id == survey_id ? s : currSurvey;
      });
      // populate the survey form with proper data
      this.survey = this._fb.group({
         survey_id: new FormControl(currSurvey.survey_id),
         survey_name: new FormControl({value: currSurvey.survey_name, disabled: true}),
         questions: this._fb.array([])
      });
      // patch the questions nested array value with the new questions
      this.currentOptionScope = [];
      //this.patchFormQuestions(currSurvey.questions);
      this.currentQuestionScope = currSurvey.questions.length - 1;
      this.patchFormQuestions(currSurvey.questions);
   }

   // used to update the questions of the form group qustions array
   patchFormQuestions(questions: any[]): void {
      const control = <FormArray>this.survey.controls['questions'];
      questions.forEach(q => {
            control.push(this._fb.group({
               question_is_active: new FormControl(q.question_is_active),
               question_text: new FormControl({value: q.question_text, disabled: true}),
               question_type: new FormControl({value: q.question_type, disabled: true}),
               options: this.patchFormOptions(q.options)
            }));
      });
   }

   // used to update the options of the nested form group options array
   patchFormOptions(options): any {
      let ops = new FormArray([]);
      options.forEach(o => {
         ops.push(this._fb.group({
            option_is_active: new FormControl(o.option_is_active),
            option_text: new FormControl({value: o.option_text, disabled: true}),
         }));
      });
      this.currentOptionScope.push(options.length - 1);
      return ops;
   }

   // Saves/Uploads the selected formData to the database
   save(formData): void {
      let survey;
      let question;
      let option;
      let architecture;
      // Get the survey index
      let surveyIndex = this.getSurveyIndex(formData);
      // If the surveyIndex is -1, this is a new survey
      if (surveyIndex === -1) {
            survey = {
                  "survey_name": formData.survey_name
            };
            // Post the new survey with the survey_name
            this.surveyService.postNewSurvey(survey).subscribe();
            this.lastSurveyId++;
            // Set the lastSurveyId, lastQuestionId, and lastOptionId for the post to the architectures table
            formData.survey_id = this.lastSurveyId;
            formData.question_id = this.lastQuestionId;
            formData.option_id = this.lastOptionId;
            // Send the entire formData object
            for (let i = 0; i < formData.questions.length; i++) {
                  this.lastQuestionId++;
                  question = {
                        "question_text": formData.questions[i].question_text,
                        "question_type": formData.questions[i].question_type
                  };
                  // First post the question
                  this.surveyService.postQuestion(question).subscribe();
                  this.surveyService.wait(50);

                  for (let j = 0; j < formData.questions[i].options.length; j++) {
                        this.lastOptionId++;
                        option = {
                              "option_text": formData.questions[i].options[j].option_text,
                              "question_id": this.lastQuestionId
                        };
                        this.surveyService.wait(50);
                        // Then post the option
                        this.surveyService.postOption(option).subscribe();
                        this.surveyService.wait(100);

                        architecture = {
                              "survey_id": this.lastSurveyId,
                              "question_id": this.lastQuestionId,
                              "option_id": this.lastOptionId
                        };
                        // Then post the architecture
                        this.surveyService.postArchitecture(architecture).subscribe();
                  }
            }
            
      // If the index is not -1, this is an existing survey
      } else {
            // For every question, check if anything has changed, updated, or been added
            for (let i = 0; i < this.surveys[surveyIndex].questions.length; i++) {
                  // // Check if questions active/inactive has changed, then update the database
                  if (formData.questions[i].question_is_active !== 
                        this.surveys[surveyIndex].questions[i].question_is_active) {
                        question = {
                              "question_id": this.surveys[surveyIndex].questions[i].question_id,
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
                                          "option_id": this.surveys[surveyIndex].questions[i].options[j].option_id,
                                          "option_is_active": formData.questions[i].options[j].option_is_active
                                    };
                              this.surveyService.updateSurveyOptionActive(option).subscribe();
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
                              // First post the option
                              this.surveyService.postOption(option).subscribe();
                              this.surveyService.wait(100);

                              architecture = {
                                    "survey_id": this.surveys[surveyIndex].survey_id,
                                    "question_id": this.surveys[surveyIndex].questions[i].question_id,
                                    "option_id": this.lastOptionId
                              };
                              // Then post the architecture
                              this.surveyService.postArchitecture(architecture).subscribe();
                        }
                  }
            }
            // Check if there are new questions added
            if (this.surveys[surveyIndex].questions.length < formData.questions.length) {
                  for (let i = this.surveys[surveyIndex].questions.length; i < formData.questions.length; i++) {
                        this.lastQuestionId++;
                        question = {
                              "question_text": formData.questions[i].question_text,
                              "question_type": formData.questions[i].question_type
                        };
                        // First post the question
                        this.surveyService.postQuestion(question).subscribe();
                        this.surveyService.wait(50);

                        for (let j = 0; j < formData.questions[i].options.length; j++) {
                              this.lastOptionId++;
                              option = {
                                    "option_text": formData.questions[i].options[j].option_text,
                                    "question_id": this.lastQuestionId
                              };
                              this.surveyService.wait(50);
                              // Then post the option
                              this.surveyService.postOption(option).subscribe();
                              this.surveyService.wait(100);

                              architecture = {
                                    "survey_id": this.surveys[surveyIndex].survey_id,
                                    "question_id": this.lastQuestionId,
                                    "option_id": this.lastOptionId
                              };
                              // Then post the architecture
                              this.surveyService.postArchitecture(architecture).subscribe();
                        }
                  }
            }
      }
   }

   // Returns the surveyIndex that matches the formData.survey_id
   getSurveyIndex(formData): any {
      let index;
      if (formData.survey_id) {
            index = formData.survey_id - 1;
      } else {
            index = -1;
      }

      return index;
   }

   // When user clicks save survey, display modal
   openModal(): void {
      this.modal.style.display = "block";
      setTimeout(() => {window.location.reload()}, 12000);
   }

   // When user clicks X, close the modal and refresh the page to see changes
   closeModal(): void {
      this.modal.style.display = "none";
      window.location.reload();
   }

   // Updates the options active status
   updateOptionActiveStatus(question, option, bool): void {
      if (! this.isNewSurvey) {
         const control = <FormGroup>question.controls.options.at(option);
         control.patchValue({option_is_active: bool});
      }
   }

   updateQuestionActiveStatus(question, bool): void {
      if (! this.isNewSurvey) {
         const control = <FormGroup>question;
         control.patchValue({question_is_active: bool});
      }
   }

} 
