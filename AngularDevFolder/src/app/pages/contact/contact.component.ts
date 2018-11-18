import { Globals } from '../../globals';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {

  data = [];

  onSubmit(end: NgForm){
    
    this.data.push(end.value);
    console.log(this.data[0]);
  }

}