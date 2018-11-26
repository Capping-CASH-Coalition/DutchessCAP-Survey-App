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
   // used to determine if the survey name is readonly or not
   nameReadOnly: boolean;

   constructor(private _fb: FormBuilder,
               public surveyService: SurveyService,
               private changeref: ChangeDetectorRef) { }

   // initilaize a new blank survey form
   ngOnInit() {
      this.newSurveyForm();
      this.surveyService.getSurveys().subscribe((response) => {
            // Get 1 survey at a time and push into surveys array
            for (let i = 0; i < response.length; i++) {
                  let survey: SurveyInfo = {
                        "survey_id": response[i].survey_id,
                        "survey_name": response[i].survey_name,
                        "date_created": response[i].date_created,
                        "survey_is_active": response[i].survey_is_active
                  };
    
                  this.surveys.push(survey);
                  // Get the survey questions by selectedSurveyId
                  this.surveyService.getSurveyQuestions(this.surveys[i].survey_id).subscribe((response)=>{
                        // Initialize the questions
                        this.surveys[i].questions = [];
                        // Iterate through the questions and push them one at a time
                        for (let j = 0; j < response.length; j++) {
                              let question: Question = {
                                    "question_id": response[j].question_id,
                                    "question_text": response[j].question_text,
                                    "question_type": response[j].question_type,
                                    "question_is_active": response[j].question_is_active,
                                    options: []
                              };
                              this.surveys[i].questions.push(question);
                        }
                        
                        // Get the survey options based on the selectedSurveyId
                        this.surveyService.getSurveyOptions(this.surveys[i].survey_id).subscribe((response) => {

                              for (let k = 0; k < this.surveys[i].questions.length; k++) {
                                    for (let l = 0; l < response.length; l++) {
                                          let option: Option = {
                                                "option_id": response[l].option_id,
                                                "option_text": response[l].option_text,
                                                "option_is_active": response[l].option_is_active,
                                                "question_id": response[l].question_id
                                          };
                                          // If the question IDs match, push the option into the questions[j].options array
                                          if (this.surveys[i].questions[k].question_id == response[l].question_id) {
                                                this.surveys[i].questions[k].options.push(option);
                                          }
                                    }
                              }
                              // Manually detect changes as the page will load faster than the async call
                              this.changeref.detectChanges();
                        }, (error) => {
                              console.log('error is ', error)
                        }) 
                        // Manually detect changes as the page will load faster than the async call
                        this.changeref.detectChanges();
                  },(error) => {
                        console.log('error is ', error)
                  })
                  // Manually detect changes as the page will load faster than the async call
                  this.changeref.detectChanges();
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

   save(formData) {
      // Get the survey index
      let surveyIndex = this.getSurveyIndex(formData);
      let questionId;
      let optionId;
      let surveyId;
      // Check if its a new survey
      console.log(surveyIndex);
      if (surveyIndex == -1) {
            this.surveyService.getLastQuestionId().subscribe((response) => {
                  questionId = response[0];
                  this.surveyService.getLastOptionId().subscribe((value) => {
                    optionId = value[0];
                    this.surveyService.getLastSurveyId().subscribe((data) => {
                      surveyId = data[0] + 1;
                      let surveyName = { "survey_name": formData.survey_name };
                      this.surveyService.postSurvey(surveyName).subscribe();
                      this.surveyService.wait(50);
                      for (let i = 0; i < formData.questions.length; i++) {
                        questionId++;
                        this.surveyService.wait(50);
                        let question = { 
                              "question_text": formData.questions[i].question_text, 
                              "question_type": formData.questions[i].question_type 
                            };
                        this.surveyService.postQuestion(formData.questions[i]).subscribe();
                        for (let j = 0; j < formData.questions[i].options.length; j++) {
                          optionId++;
                          let option = { 
                                "option_text": formData.questions[i].options[j].option, 
                                "question_id": questionId }
                          this.surveyService.wait(50);
                          this.surveyService.postOption(formData.questions[i].options[j]).subscribe();
                          let architecture = { 
                                "survey_id": surveyId, 
                                "question_id": questionId, 
                                "option_id": optionId };
                          this.surveyService.wait(50);
                          this.surveyService.postArchitecture(architecture).subscribe((response) => {
                          }, (error) => {
                            console.log('error is ', error)
                          })
                        }
                      }
                    }, (error) => {
                      console.log('error is ', error)
                    })
                  }, (error) => {
                    console.log('error is ', error)
                  })
                }, (error) => {
                  console.log('error is ', error)
                })
      }

      console.log(formData);
   }

   // Returns the surveyIndex that matches the formData.survey_id
   getSurveyIndex(formData) {
      let index;
      for (let i = 0; i < this.surveys.length; i++) {
            console.log("formData.survey_id: " + formData.survey_id);
            console.log("surveys " + i + " survey_id " + this.surveys[i].survey_id);
            if (formData.survey_id == this.surveys[i].survey_id) {
                  index = i;
            } else {
                  index = -1;
            }
      }
      console.log("Index: " + index);
      return index;
      
   }

} 
