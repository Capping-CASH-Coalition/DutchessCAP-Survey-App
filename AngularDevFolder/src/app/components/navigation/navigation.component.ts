import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}