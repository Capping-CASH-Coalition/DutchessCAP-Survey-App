import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
})

export class EditComponent implements OnInit {

   orderForm: FormGroup;
   items: FormArray;
   formControlName="name"

   constructor(private formBuilder: FormBuilder) { }

   ngOnInit() {
      this.orderForm = this.formBuilder.group({
         customerName: '',
         email: '',
         items: this.formBuilder.array([this.createItem()])
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
      this.items = this.orderForm.get('items') as FormArray;
      this.items.push(this.createItem());
    }

    printItems(): void {
      this.items = this.orderForm.get('items') as FormArray;
      console.log(this.items);
    }



}
