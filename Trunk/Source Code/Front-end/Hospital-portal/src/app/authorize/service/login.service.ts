import { Injectable } from '@angular/core';
import { ApiService } from "./../../api.service";
import { User } from "./../../main/user/shared/user.model";
import { Response } from "@angular/http";
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

    user: User = new User();
    constructor(private apiService: ApiService, private cookieService: CookieService) { }
    login(username, password) {
        return new Promise((resolve, reject) => {
            this.apiService.get('checkLogin?username=' + username + '&password=' + password)
                .then((res: Response) => {
                    this.user = res.json();
                    this.cookieService.set("Auth-UserId", this.user.userId.toString());
                    this.cookieService.set("Auth-Username", this.user.userName);
                    this.cookieService.set("Auth-RoleId", this.user.roleId.toString());
                    resolve(this.user);
                    // this.apiService.token = res.json();              
                    // this.getAuthorize().then(user => {
                    //     resolve(user);
                    // }).catch(err => {
                    //     reject(err);
                    // });
                }).catch(err => {
                    reject(err);
                });
        });
    }

    // getAuthorize() {
    //     return new Promise<User>((resolve, reject) => {
    //         this.apiService.get(`authenticateUser/${this.apiService.token}`).then(res => {
    //              this.user = res.json();
    //              resolve(this.user);
    //          }).catch(err => {
    //              reject(err);
    //          });
    //         this.cookieService.get("Auth-RoleId");
    //     });
    // }
}