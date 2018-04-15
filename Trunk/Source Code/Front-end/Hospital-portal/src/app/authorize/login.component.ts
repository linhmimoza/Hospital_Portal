import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { NotificationService } from '../main/extra/notification.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    username: string;
    password: string;

    constructor(private router: Router, private loginService: LoginService, private notificationaService: NotificationService) {

    }

    login() {
        this.loginService.login(this.username, this.password).then(() => {
            this.router.navigate(["main"]);
        }).catch(err => {
            this.notificationaService.error("Invalid username or password!");
        });
    }
}
