import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Globals } from "../../globals" 

@Component({
   selector: 'app-edit',
   templateUrl: './edit.component.html',
   styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

   // declare the survey form group holding all the values for the form
   survey: FormGroup;
   // used to determine if the survey name is readonly or not
   nameReadOnly: boolean;

   constructor(
      private _fb: FormBuilder,
      private globals: Globals
   ) { };

   // initilaize a new blank survey form
   ngOnInit() {
      this.newSurveyForm();
   }
   
   // sets the survey name to readonly based on the edit global
   setReadOnly(): boolean {
      return this.nameReadOnly;
   }

   // sets the survey form to a blank survey
   newSurveyForm() {
      this.survey = this._fb.group({
         surveyName: new FormControl(''),
         questions: this._fb.array([
            this.initQuestion(),
         ])
      });
      this.nameReadOnly = false;
      jQuery("#surveySelect").val(-1);
   }  

   // Used to update the formgroup from a given survey id
   updateSurveyFormData(survey_id) {
      let currSurvey;
      this.nameReadOnly = true;
      // loop through the surveys and set the current one to the one that mathches the id
      this.globals.surveys.forEach(s => {
         currSurvey = s.survey_id == survey_id ? s : currSurvey;
      });
      // populate the survey form with proper data
      this.survey = this._fb.group({
         surveyName: new FormControl(currSurvey.survey_name),
         questions: this._fb.array([])
      });
      // patch the questions nested array value with the new questions
      this.patchFormQuestions(currSurvey.questions);
   }

   // used to update the questions of the form group qustions array
   patchFormQuestions(questions: any[]) {
      const control = <FormArray>this.survey.controls['questions'];
      questions.forEach(q => {
         if (q.question_active) {
            control.push(this._fb.group({
               questionText: new FormControl(q.question_text),
               questionType: new FormControl(q.question_type),
               questionOptions: this.patchFormOptions(q.options)
            }));
         }
      });
   }

   // used to update the options of the nested form group options array
   patchFormOptions(options) {
      let ops = new FormArray([]);
      options.forEach(o => {
         ops.push(this._fb.group({
            option: new FormControl(o.option_text)
         }));
      });
      return ops;
   }

   // create a new blank question
   initQuestion() {
      return this._fb.group({
         questionText: new FormControl(''),
         questionType: new FormControl(''),
         questionOptions: this._fb.array([
            this.initOption(),
         ])
      });
   }

   // create a new blank option
   initOption() {
      return this._fb.group({
         option: new FormControl('')
      })
   }

   // add question to the form group array at the given index
   addQuestion(idx: number) {
      const control = <FormArray>this.survey.controls['questions'];
      control.insert(idx + 1, this.initQuestion());
   }

   // remove question from the form group array at the given index
   removeQuestion(idx: number) {
      const control = <FormArray>this.survey.controls['questions'];
      control.removeAt(idx);
   }

   // add option to the form group array at the given index
   addOption(question): void {
      const control = <FormArray>question.controls.questionOptions;
      control.push(this.initOption());
   }

   // remove option from the form group array at the given index
   removeOption(question, j: number) {
      const control = <FormArray>question.controls.questionOptions;
      control.removeAt(j);
   }

   // checks the question type and returns boolean to display the options div
   showOptionsDiv(question): boolean {
      const questionType = <FormArray>question.controls.questionType.value;
      let ret: boolean;
      switch (questionType.toString()) {
         case "dropdown":
            ret = true;
            break;
         case "checkboxes":
            ret = true;
            break;
         case "mc":
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

   save(formData) {
      console.log(formData.value);
   }

} 
