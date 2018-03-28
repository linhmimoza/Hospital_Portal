import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../app/api.service';
import { SERVER, OPTIONS } from '../constant/commonConstant';

@Injectable()
export class HomeService {
    private opts: any;
    constructor(private _http: Http) {
    }

    getCategoryList(): Observable<any> {
        return this._http.get(`${SERVER}Category/getListCategory`, OPTIONS).map(res => res.json());
    }

    resetBookingNumber() {
        return this._http.get(`${SERVER}BookingNumber/resetBookingNumber`).map(res => res);
    }
}
