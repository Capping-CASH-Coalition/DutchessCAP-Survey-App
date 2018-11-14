import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, FormControlName } from '@angular/forms';
import { Globals } from "../../globals" //path relative


@Component({
   selector: 'app-edit',
   templateUrl: './edit.component.html',
   styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

   survey: FormGroup;
   nameReadOnly: boolean;

   constructor(
      private _fb: FormBuilder,
      private globals: Globals
   ) { };

   ngOnInit() {
      this.newSurveyForm();
   }
   

   setReadOnly(): boolean {
      return this.nameReadOnly;
   }

   newSurveyForm() {
      this.survey = this._fb.group({
         surveyName: new FormControl(''),
         questions: this._fb.array([
            this.initQuestion(),
         ])
      });
      this.nameReadOnly = false;
   }  


   updateSurveyFormData(survey_id) {
      let currSurvey;
      this.nameReadOnly = true;

      this.globals.surveys.forEach(s => {
         currSurvey = s.survey_id == survey_id ? s : currSurvey;
      });

      this.survey = this._fb.group({
         surveyName: new FormControl(currSurvey.survey_name),
         questions: this._fb.array([])
      });

      this.patchFormQuestions(currSurvey.questions);

   }

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

   patchFormOptions(options) {
      let ops = new FormArray([]);
      options.forEach(o => {
         ops.push(this._fb.group({
            option: new FormControl(o.option_text)
         }));
      });
      return ops;
   }

   initQuestion() {
      return this._fb.group({
         questionText: new FormControl(''),
         questionType: new FormControl(''),
         questionOptions: this._fb.array([
            this.initOption(),
         ])
      });
   }

   initOption() {
      return this._fb.group({
         option: new FormControl('')
      })
   }

   addQuestion(idx: number) {
      const control = <FormArray>this.survey.controls['questions'];
      control.insert(idx + 1, this.initQuestion());
   }

   removeQuestion(idx: number) {
      const control = <FormArray>this.survey.controls['questions'];
      control.removeAt(idx);
   }

   addOption(question): void {
      const control = <FormArray>question.controls.questionOptions;
      control.push(this.initOption());
   }

   removeOption(question, j: number) {
      const control = <FormArray>question.controls.questionOptions;
      control.removeAt(j);
   }

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