import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Manufacturer } from './../shared/manufacturer.model';

@Injectable()// dùng để chưa sẽ tài nguyên

export class ManufacturerService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getManufacturers', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    saveManufacturer(manufacturer: Manufacturer) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveManufacturer', manufacturer).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getManufacturer(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getManufacturer/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
