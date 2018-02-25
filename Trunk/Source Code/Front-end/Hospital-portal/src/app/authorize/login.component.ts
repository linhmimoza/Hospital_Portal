import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    username: string;
    password: string;
    role: number;

    constructor(private router: Router) {

    }

    login() {
        
    }
}