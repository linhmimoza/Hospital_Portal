import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';
import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class MedicalService {
    private opts: any;
    constructor(private _http: Http) { }

    getSpecialList(): Observable<any> {
        return this._http.get(`${SERVER}Department/getListDepartment`, OPTIONS).map(res => res.json());
    }

    getServiceList(id): Observable<any> {
        return this._http.get(`${SERVER}service/getListService?DepartmentId=${id}`, OPTIONS).map(res => res.json());
    }

    getTimeList(date): Observable<any> {
        return this._http.get(`${SERVER}time/getListTime?Date=${date}&Available=1`, OPTIONS).map(res => res.json());
    }

    getMedicalIdentity(identity): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/getListMedicalBooking?GuestIdentity=${identity}`, OPTIONS).map(res => res.json());
    }

    submitBooking(param): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/createMedicalBooking?${param}`, OPTIONS).map(res => res);
    }

    getBookingId(): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/getBookingId`, OPTIONS).map(res => res.json());
    }

    createBookingNumber(id): Observable<any> {
        return this._http.get(`${SERVER}BookingNumber/createBookingNumber?BookingId=${id}`, OPTIONS).map(res => res);
    }

    bookingSuccess(timeId): Observable<any> {
        return this._http.get(`${SERVER}time/bookingSuccess?TimeId=${timeId}`, OPTIONS).map(res => res);
    }

    checkAvailable(): Observable<any> {
        return this._http.get(`${SERVER}time/checkAvailable`, OPTIONS).map(res => res.json());
    }

}
