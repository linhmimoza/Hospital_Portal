import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
@Injectable()
export class ApiService {
    host: string = 'http://localhost:8084/TestRestful/webresources/generic/';
    token: string = "none";
    constructor(private router: Router, private http: Http, private cookieService: CookieService) {
        $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
        if ($.browser.device) {
            this.host = 'http://localhost:8084/TestRestful/webresources/generic/';
        }
    }

    post(url: string, data: any) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            this.http.post(this.host + url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200 || res.status == 204) {
                        resolve(res);
                    } else {
                        reject("Có lỗi xảy ra");
                    }
                }).catch(err => {
                    if (err.status == 401) this.router.navigate(["/login"]);
                    else reject(err);
                });
        });
    }

    get(url: string) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            this.http.get(this.host + url, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200 || res.status == 204) {
                        resolve(res);
                    } else {
                        reject("Có lỗi xảy ra");
                    }
                }).catch(err => {
                    if (err.status == 401) this.router.navigate(["/login"]);
                    else reject(err);
                });
        });
    }
}