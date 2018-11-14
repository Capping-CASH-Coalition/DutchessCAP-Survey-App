import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import {smoothlyMenu} from "../../app.helpers";
//import { Navigation } from '../navigation/navigation.component';

@Component({
    selector: 'topnavbar',
    templateUrl: './topnavbar.component.html',
    styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent {
    
    ngOnInit() {

    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
}