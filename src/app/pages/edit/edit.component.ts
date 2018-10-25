import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
})

export class EditComponent implements OnInit {

   surveyForm: FormGroup;
   questions: FormArray;
   formControlName="name"

   constructor(private formBuilder: FormBuilder) { }

   ngOnInit() {
      this.surveyForm = this.formBuilder.group({
         customerName: '',
         email: '',
         questions: this.formBuilder.array([this.createItem()])
      });
   }

   createItem(): FormGroup {
      return this.formBuilder.group({
        name: '',
        description: '',
        price: ''
      });
    }

    addItem(): void {
      this.questions = this.surveyForm.get('questions') as FormArray;
      this.questions.push(this.createItem());
    }

    removeQuestion(idx: number): void {
      if ( this.questions.length > 1 ) {
         this.questions = this.surveyForm.get('questions') as FormArray;
         this.questions.removeAt(idx);
      }
    }

    addQuestion(idx: number): void {
      this.questions = this.surveyForm.get('questions') as FormArray;
      this.questions.insert(idx + 1, this.createItem());
    }



}
