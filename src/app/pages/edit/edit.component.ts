import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

   surveyForm: FormGroup;
   questions: FormArray;
   formControlName="Questions"
   textResponse = true;

   
   constructor(private formBuilder: FormBuilder) { }

   ngOnInit() {
      this.surveyForm = new FormGroup({
      });

      this.surveyForm = this.formBuilder.group({
         questions: this.formBuilder.array([this.createQuestion()])
      });
   
   }

   createQuestion(): FormGroup {
      return this.formBuilder.group({
        promptText: [],
        promptType: [],
        options: []
      });
    }

    removeQuestion(idx: number): void {
      if ( this.questions.length > 1 ) {
         this.questions = this.surveyForm.get('questions') as FormArray;
         this.questions.removeAt(idx);
      }
    }

    addQuestion(idx: number): void {
      this.questions = this.surveyForm.get('questions') as FormArray;
      this.questions.insert(idx + 1, this.createQuestion());
    }

    logDropdown(st: string): void {
       console.log(st);
    }

    logFormValue(): void {
       const formValue = this.surveyForm.value;
       console.log(formValue);

    }
  



}
