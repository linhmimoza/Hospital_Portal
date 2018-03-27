import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';
import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class HomeMainService {
    private opts: any;
    constructor(private _http: Http) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.opts = new RequestOptions({ headers });
    }

    getNewsList(): Observable<any> {
        return this._http.get(`${SERVER}Article/getTopListArticle`, OPTIONS).map(res => res.json());
    }
}
