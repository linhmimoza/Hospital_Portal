import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    username: string;
    password: string;

    constructor(private router: Router, private loginService:LoginService) {

    }

    login() {
        this.loginService.login(this.username, this.password).then(() => {
            this.router.navigate(["main"]);
        }).catch(err => {
            alert(err);
        });
    }
}