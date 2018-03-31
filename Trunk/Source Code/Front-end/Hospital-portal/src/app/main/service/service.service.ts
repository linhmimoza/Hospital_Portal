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
        return this._http.get(`${SERVER}service/createService?${data}`).map(res => res);
    }

    updateService(data): Observable<any> {
        return this._http.get(`${SERVER}service/updateService?${data}`).map(res => res);
    }

    disableService(id): Observable<any> {
        return this._http.get(`${SERVER}service/disableService?ServiceId=${id}`, OPTIONS).map(res => res);
    }

    detail(id): Observable<any> {
        return this._http.get(`${SERVER}service/getListServiceById?ServiceId=${id}`, OPTIONS).map(res => res.json());
    }
}
