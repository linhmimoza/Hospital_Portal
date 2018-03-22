import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';

const host = 'http://localhost:8080/Datlich/webresources/';

@Injectable()
export class NewsService {
    private opts: any;
    constructor(private _http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.opts = new RequestOptions({ headers });
    }

    getNewsList(categoryId): Observable<any> {
        return this._http.get(`${host}Article/getListArticle?CategoryId=${categoryId}`, this.opts).map(res => res.json());
    }

    download(name): Observable<any> {
        return this._http.get(`${host}DownloadFile/DownloadFile?FileName=${name}`, this.opts).map(res => res.json());
    }

}