import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';
import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class MedicalBookingService {
    constructor(private _http: Http, private apiService: ApiService) {
    }

    getListAll(): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/getListMedicalBookingAdmin`).map(res => res.json());
    }

    getListbyDate(date, serviceId): Observable<any> {
        // tslint:disable-next-line:max-line-length
        return this._http.get(`${SERVER}MedicalBooking/getBookingByDate?date=${date}&serviceId=${serviceId}`, OPTIONS).map(res => res.json());
    }

    // getListbyDate(date, serviceId) {
    //     return new Promise((resolve, reject) => {
    //         this.apiService.get(`http://localhost:8080/TestRestful/webresources/MedicalBooking/getBookingByDate?date=${date}&serviceId=${serviceId}`).then(res => {
    //             resolve(res.json());
    //         }).catch(err => {
    //             reject(err);
    //         });
    //     });
    // }

    searchByName(searchText): Observable<any> {
        return this._http.get(`${SERVER}MedicalBooking/getListMbAdminByName?GuestName=${searchText}`).map(res => res.json());
    }
}
