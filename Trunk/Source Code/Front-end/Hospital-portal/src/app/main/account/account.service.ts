import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Injectable()

export class AccountService {
    constructor(private route: ActivatedRoute, private router: Router,
        private cookieService: CookieService) {
    }
    getRoleId() {
     let   roleId = this.cookieService.get('Auth-RoleId');

        return  roleId;
    }
    getUserId() {
        return parseInt(this.cookieService.get('Auth-UserId'), 10);
    }
}
