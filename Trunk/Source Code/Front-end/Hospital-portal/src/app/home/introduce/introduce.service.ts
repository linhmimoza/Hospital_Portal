import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DOWNLOAD_LINK, SERVER, OPTIONS } from '../../constant/commonConstant';

import { ApiService } from '../../../app/api.service';

@Injectable()
export class IntroService {
    private opts: RequestOptions;
    constructor(private _http: Http) { }

    getDetail(id): Observable<any> {
        return this._http.get(`${SERVER}Introduce/getListIntroduceById?Id=${id}`, OPTIONS).map(res => res.json());
    }

}
