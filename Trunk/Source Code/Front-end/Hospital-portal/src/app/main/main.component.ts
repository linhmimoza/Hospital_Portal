import { Component } from '@angular/core';
import { User } from './user/shared/user.model';
import { LoginService } from '../authorize/service/login.service';
import { ActivatedRoute, Router } from '@angular/router'; 
declare var $: any;

@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})
export class MainComponent {
    currentUser: User = new User();
    menu: string [];
    private routerSubcription: any;
    title: string;
    constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {
       
    }

    ngOnInit() {
        this.currentUser = this.loginService.user;
        // let role = this.loginService.user.role;
        // if (role == 1){
        //     this.menu = [""];
        // }
        console.log(this.currentUser);
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
}