import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';
import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class ServicesService {
    constructor(private _http: Http) {
    }

    createService(data): Observable<any> {
        return this._http.get(`${SERVER}Article/createArticle?${data}`).map(res => res);
    }

    disableService(id): Observable<any> {
        return this._http.get(`${SERVER}Article/disableArticle?ArticleId=${id}`, OPTIONS).map(res => res);
    }
}
