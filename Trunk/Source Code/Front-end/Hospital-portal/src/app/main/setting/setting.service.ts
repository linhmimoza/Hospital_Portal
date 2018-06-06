import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class SettingService {
    constructor(private _http: Http) {
    }

    createSettingTime(data): Observable<any> {
        return this._http.get(`${SERVER}time/updateLimitAmountTime?${data}`).map(res => res);
    }

    createTime(data): Observable<any> {
        return this._http.get(`${SERVER}time/createDate?dateto=${data.dateto}&limit=${data.limit}&serviceId=${data.serviceId}`, 
        OPTIONS).map(res => res);
    }

    updateLimit(data): Observable<any> {
        return this._http.get(`${SERVER}time/updateLimitAmountTime?Limit=${data.updateLimit}`, OPTIONS).map(res => res);
    }
    checkAvailable(): Observable<any> {
        return this._http.get(`${SERVER}time/checkAvailable`, OPTIONS).map(res => res.json());
    }

}
