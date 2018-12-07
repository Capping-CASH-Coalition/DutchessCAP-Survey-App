import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    constructor(private router: Router) { }

    // Redirects to given routename
    activeRoute(routeName: string): boolean {
        return this.router.url.indexOf(routeName) > -1;
    }
}