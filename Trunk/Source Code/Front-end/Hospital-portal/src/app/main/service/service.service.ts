import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../../app/api.service';
import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class ServicesService {
    constructor(private _http: Http, private apiService: ApiService) { }

    createService(data): Observable<any> {
        return this._http.post(`${SERVER}service/createService`, data, OPTIONS).map(res => res);
    }

    updateService(data): Observable<any> {
        return this._http.post(`${SERVER}service/updateService`, data, OPTIONS).map(res => res);
    }

    getListAll(id): Observable<any> {
        return this._http.get(`${SERVER}service/getAllListService?DepartmentId=${id}`).map(res => res.json());
    }

    searchByName(searchText, departmentId): Observable<any> {
        return this._http.get(`${SERVER}service/getListServiceByName?ServiceName=${searchText}&DepartmentId=${departmentId}`).map(res => res.json());
    }

    disableService(id): Observable<any> {
        return this._http.get(`${SERVER}service/disableService?ServiceId=${id}`, OPTIONS).map(res => res);
    }

    activeService(id): Observable<any> {
        return this._http.get(`${SERVER}service/activeService?ServiceId=${id}`, OPTIONS).map(res => res);
    }

    detail(id): Observable<any> {
        return this._http.get(`${SERVER}service/getListServiceById?ServiceId=${id}`, OPTIONS).map(res => res.json());
    }
    getDepartment(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getDepartmentById/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
