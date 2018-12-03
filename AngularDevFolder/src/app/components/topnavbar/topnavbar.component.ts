import { Component } from '@angular/core';
import {smoothlyMenu} from "../../app.helpers";
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'topnavbar',
    templateUrl: './topnavbar.component.html',
    styleUrls: ['./topnavbar.component.css']
})

export class TopnavbarComponent {
    // Declare the AuthenticationService so that it's available to this component
    constructor(private auth: AuthenticationService) { }
    
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    helpGuide(): void {
        
    }
}