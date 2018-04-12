import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DOWNLOAD_LINK, SERVER, OPTIONS } from '../../constant/commonConstant';

import { ApiService } from '../../../app/api.service';

@Injectable()
export class NewsService {
    private opts: RequestOptions;
    constructor(private _http: Http) { }

    getNewsList(categoryId, page): Observable<any> {
        return this._http.get(`${SERVER}Article/getPageArticle?page=${page}&categoryId=${categoryId}`, OPTIONS).map(res => res.json());
    }

    getDetail(id): Observable<any> {
        return this._http.get(`${SERVER}Article/getListArticleById?Id=${id}`, OPTIONS).map(res => res.json());
    }

    getFile(name) {
        window.open(`${DOWNLOAD_LINK}${name}`);
    }

    searchArticle(name: string, page: number, categoryId: number) {
        return this._http.get(`${SERVER}Article/getListArticleByPageTitle?page=${page}&categoryId=${categoryId}&title=${name}`, OPTIONS)
        .map(res => res.json());
    }

}
