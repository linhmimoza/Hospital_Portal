import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';

const host = 'http://localhost:8080/Datlich/webresources/';

@Injectable()
export class MedicalService {
    private opts: any;
    constructor(private _http: Http) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.opts = new RequestOptions({ headers });
    }

    getSpecialList(): Observable<any> {
        return this._http.get(`${host}Specialist/getListSpecialist`, this.opts).map(res => res.json());
    }

    getServiceList(id): Observable<any> {
        return this._http.get(`${host}service/getListService?SpecialistId=${id}`, this.opts).map(res => res.json());
    }

    getTimeList(date): Observable<any> {
        return this._http.get(`${host}time/getListTime?Date=${date}&Available=1`, this.opts).map(res => res.json());
    }

    getMedicalIdentity(identity): Observable<any> {
        return this._http.get(`${host}MedicalBooking/getListMedicalBooking?GuestIdentity=${identity}`, this.opts).map(res => res.json());
    }

    submitBooking(param): Observable<any> {
        return this._http.get(`${host}MedicalBooking/createMedicalBooking?${param}`, this.opts).map(res => res);
    }

    getBookingId(): Observable<any> {
        return this._http.get(`${host}MedicalBooking/getBookingId`, this.opts).map(res => res.json());
    }

    createBookingNumber(id): Observable<any> {
        return this._http.get(`${host}BookingNumber/createBookingNumber?BookingId=${id}`, this.opts).map(res => res);
    }

    bookingSuccess(timeId): Observable<any> {
        return this._http.get(`${host}time/bookingSuccess?TimeId=${timeId}`, this.opts).map(res => res);
    }

    checkAvailable(): Observable<any> {
        return this._http.get(`${host}time/checkAvailable`, this.opts).map(res => res.json());
    }

}