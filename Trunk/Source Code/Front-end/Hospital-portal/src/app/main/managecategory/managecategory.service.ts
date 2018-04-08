import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SERVER, OPTIONS } from '../../constant/commonConstant';

@Injectable()
export class CategoryService {
    constructor(private _http: Http) {
    }

    createCategory(data): Observable<any> {
        return this._http.post(`${SERVER}Category/createCategory`, data, OPTIONS).map(res => res);
    }

    getListAll(): Observable<any> {
        return this._http.get(`${SERVER}Category/getAllListCategory`).map(res => res.json());
    }

    searchByName(searchText): Observable<any> {
        return this._http.get(`${SERVER}Category/getListCategoryByName?CategoryName=${searchText}`).map(res => res.json());
    }

    updateCategory(data): Observable<any> {
        return this._http.post(`${SERVER}Category/updateCategory`, data, OPTIONS).map(res => res);
    }

    disableCategory(id): Observable<any> {
        return this._http.get(`${SERVER}Category/disableCategory?CategoryId=${id}`, OPTIONS).map(res => res);
    }

    activeCategory(id): Observable<any> {
        return this._http.get(`${SERVER}Category/activeCategory?CategoryId=${id}`, OPTIONS).map(res => res);
    }

    detail(id): Observable<any> {
        return this._http.get(`${SERVER}Category/getListCategoryById?CategoryId=${id}`, OPTIONS).map(res => res.json());
    }
}
