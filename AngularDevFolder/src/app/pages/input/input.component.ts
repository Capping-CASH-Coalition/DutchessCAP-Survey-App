import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
    constructor( private globals: Globals) { }

    ngOnInit() {
    }
}
