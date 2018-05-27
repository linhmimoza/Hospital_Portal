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
        return this._http.get(`${SERVER}Department/getListUseDepartment`, OPTIONS).map(res => res.json());
    }

    getServiceList(id): Observable<any> {
        return this._http.get(`${SERVER}service/getListService?DepartmentId=${id}`, OPTIONS).map(res => res.json());
    }

    getTimeList(): Observable<any> {
        return this._http.get(`${SERVER}time/getListTimeAvailable`, OPTIONS).map(res => res.json());
    }

    getMedicalIdentity(identity): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/getListMedicalBooking?GuestPhone=${identity}`, OPTIONS).map(res => res.json());
    }

    submitBooking(data): Observable<any> {
        return this._http.post(`${SERVER}MedicalBooking/createMedicalBooking`, data, OPTIONS).map(res => res);
    }

    getBookingId(): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/getBookingId`, OPTIONS).map(res => res);
    }

    createBookingNumber(id, date): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/createBookingNumber?BookingId=${id}&date=${date}`, OPTIONS).map(res => res);
    }

    bookingSuccess(timeId): Observable<any> {
        return this._http.get(`${SERVER}time/bookingSuccess?TimeId=${timeId}`, OPTIONS).map(res => res);
    }

    checkAvailable(): Observable<any> {
        return this._http.get(`${SERVER}time/checkAvailable`, OPTIONS).map(res => res.json());
    }

    createIntendTime(id): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/createIntendTime?BookingId=${id}`, OPTIONS).map(res => res);
    }

    getTimeId(date): Observable<any> {
        return this._http.get(`${SERVER}time/checkDateAvailable?date=${date}`, OPTIONS).map(res => res);
    }

    getMinMax(): Observable<any> {
        return this._http.get(`${SERVER}time/getFirstAndLastDate`, OPTIONS).map(res => res.json());
    }

}
