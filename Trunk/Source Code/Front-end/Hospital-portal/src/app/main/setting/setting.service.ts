import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';
import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class SettingService {
    constructor(private _http: Http) {
    }

    createSettingTime(data): Observable<any> {
        return this._http.get(`${SERVER}time/updateAmountTime?${data}`).map(res => res);
    }

}
