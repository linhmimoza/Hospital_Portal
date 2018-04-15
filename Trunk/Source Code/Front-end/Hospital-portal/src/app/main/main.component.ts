import { Component } from '@angular/core';
import { User } from './user/shared/user.model';
import { LoginService } from '../authorize/service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})
export class MainComponent {
    currentUser: User = new User();
    userName: string;
    userId: string;
    roleId: string;
    menu: string[];
    private routerSubcription: any;
    title: string;
    constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService,
        private cookieService: CookieService) {
        var a = this.router.events.subscribe(event => {
            if (event.constructor.name === "NavigationEnd") {
                let url = this.router.url.toString();
                if (url.includes("meeting")) {
                    this.title = "Meeting";
                } else if (url.includes("mission")) {
                    this.title = "Mission";
                } else if (url.includes("department")) {
                    this.title = "Department";
                } else if (url.includes("notification")) {
                    this.title = "Notification";
                } else if (url.includes("room")) {
                    this.title = "Room";
                } else if (url.includes("shiftSchedule")) {
                    this.title = "Shift schedule";
                } else if (url.includes("user")) {
                    this.title = "User";
                } else if (url.includes("hospital")) {
                    this.title = "Hospital portal";
                }
            }
        });
    }

    ngOnInit() {
        this.userName = this.cookieService.get("Auth-Username");
        console.log(this.userName);
        this.roleId = this.cookieService.get("Auth-RoleId");
        console.log(this.roleId);
    }

    ngAfterViewInit() {
        // Lazy load js
        $.getScript("assets/porto/javascripts/theme.js", function () {
            $.getScript("assets/porto/javascripts/theme.custom.js", function () {
                $.getScript("assets/porto/javascripts/theme.init.js", function () {
                    $('#menuBtn').trigger('click');
                });
            });
        });
    }

    ngOnDestroy() {
        if (this.routerSubcription) this.routerSubcription.unsubscribe();
    }

    logout() {
        this.cookieService.set("Auth-UserId", null);
        this.cookieService.set("Auth-Username", null);
        this.cookieService.set("Auth-RoleId", null);
        this.router.navigate(['/login']);
    }
}
