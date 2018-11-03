import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

   survey: FormGroup;

   constructor(private _fb: FormBuilder) { }

   ngOnInit() {
      this.survey = this._fb.group({
         surveyName: new FormControl(''),
         questions: this._fb.array([
            this.initQuestion(),
         ])
      });
   }

   initQuestion() {
      return this._fb.group({
         questionText: new FormControl(''),
         questionType: new FormControl(''),
         questionOptions: this._fb.array([
            this.initOption()
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
      control.insert(idx+1, this.initQuestion());
   }
   
   removeQuestion(idx: number) {
      const control = <FormArray>this.survey.controls['questions'];
      control.removeAt(idx);
   }

   addOption(question): void {
      const control = <FormArray>question.controls.questionOptions;
      control.push(this.initOption());
   }

   removeOption(question, j : number) {
      const control = <FormArray>question.controls.questionOptions;
      control.removeAt(j);
   }

   showOptionsDiv(question): boolean {
      const questionType = <FormArray>question.controls.questionType.value;
      let ret: boolean;
      switch(questionType.toString()) {
         case "Dropdown":
            ret =  true;
            break;
         case "Checkboxes":
            ret =  true;
            break;
         case "Multiple Choice":
            ret =  true;
            break;
         case "Short Answer":
            ret =  false;
            break;
         case "Paragraph":
            ret =  false;
            break;
         case "5 Star Rating":
            ret =  false;
            break;
         default:
            ret =  true;
      }
      return ret;
   }

   save(formData) {
      console.log(formData.value);
   }

} 