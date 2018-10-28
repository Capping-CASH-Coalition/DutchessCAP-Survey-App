import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Login} from "../../models/login";
import { SurveyService } from '../../survey.service';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    providers: [SurveyService]
})
export class Navigation implements OnInit {
    @Input() loginInfo:Login;
    constructor( private router: Router ) { }

    ngOnInit() { 
    }
    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }
}