import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';
import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class MedicalBookingService {
    constructor(private _http: Http) {
    }

    getListAll(): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/getListMedicalBookingAdmin`).map(res => res.json());
    }

    searchByName(searchText): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/getListMbAdminByName?GuestName=${searchText}`).map(res => res.json());
    }
}
