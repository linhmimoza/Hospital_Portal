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

                });
            });
        });
    }

    ngOnDestroy() {
        if (this.routerSubcription) this.routerSubcription.unsubscribe();
    }

    logout(){
        this.cookieService.deleteAll();
        this.router.navigate(['/login']);
    }
}