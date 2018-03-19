import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const host = 'http://localhost:8080/Datlich/webresources/service/';

@Injectable()
export class ServicesService {
    private opts: any;
    constructor(private _http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.opts = new RequestOptions({ headers });
    }
    
    getServiceList(id): Observable<any> {
        return this._http.get(`${host}getListService?SpecialistId=${id}`, this.opts).map(res => res.json());
    }
}