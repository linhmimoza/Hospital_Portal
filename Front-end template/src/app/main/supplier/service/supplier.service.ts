import { Injectable } from '@angular/core';

import { ApiService } from './../../../api.service';
import { Suppiler } from '../shared/supplier.model';


@Injectable()
export class SupplierService {
    constructor(private apiService: ApiService) { }
    saveSupplier(supplier: Suppiler) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveSupplier', supplier).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getSuppliers', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getSupplier(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getSupplier/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}