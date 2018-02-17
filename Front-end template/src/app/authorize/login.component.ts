import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
@Component({
    selector: 'login',
    templateUrl:'./login.component.html'
})
export class LoginComponent {

    username:string;
    password:string;

    constructor(private router: Router, private loginService:LoginService){

    }

    login(){
        this.loginService.login(this.username,this.password).then(()=>{
            this.router.navigate(["main/dashboard"]);
        }).catch(err=>{
            alert(err);
        });
    }
}