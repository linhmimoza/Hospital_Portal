import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DOWNLOAD_LINK, SERVER, OPTIONS } from '../../constant/commonConstant';

import { ApiService } from '../../../app/api.service';

@Injectable()
export class AdminNewsService {
    private opts: any;
    constructor(private _http: Http) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.opts = new RequestOptions({ headers });
    }

    createNews(data): Observable<any> {
        return this._http.get(`${SERVER}Article/createArticle?${data}`, OPTIONS).map(res => res);
    }

    download(name): Observable<any> {
        return this._http.get(`${SERVER}DownloadFile/DownloadFile?FileName=${name}`, this.opts).map(res => res.json());
    }

    getNewsList(categoryId): Observable<any> {
        return this._http.get(`${SERVER}Article/getListArticle?CategoryId=${categoryId}`, this.opts).map(res => res.json());
    }

    getDetail(id): Observable<any> {
        return this._http.get(`${SERVER}Article/getListArticleById?Id=${id}`, this.opts).map(res => res.json());
    }

    getFile(name) {
        window.open(`${DOWNLOAD_LINK}${name}`);
    }

    update(data): Observable<any> {
        return this._http.get(`${SERVER}Article/updateArticle?${data}`, OPTIONS).map(res => res);
    }

    disableNews(id): Observable<any> {
        return this._http.get(`${SERVER}Article/disableArticle?ArticleId=${id}`, OPTIONS).map(res => res);
    }
}