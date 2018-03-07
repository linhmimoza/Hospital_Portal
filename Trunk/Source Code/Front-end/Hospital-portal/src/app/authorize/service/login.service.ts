import { Injectable } from '@angular/core';
import { ApiService } from "./../../api.service";
import { User } from "./../../main/user/shared/user.model";
import { Response } from "@angular/http";
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

    user: User = new User();
    constructor(private apiService: ApiService) { }
    login(username, password) {
        return new Promise((resolve, reject) => {
            this.apiService.get('checkLogin?username=' + username + '&password=' + password)
                .then((res: Response) => {
                    this.user = res.json();
                    resolve(res.json());
                    // alert(res.json());
                }).catch(err => {                
                    alert("Invalid username or password");
                    reject(err);
                });
        });
    }
}