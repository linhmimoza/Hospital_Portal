import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { InOut } from './../shared/in-out.model';

@Injectable()// dùng để chưa sẽ tài nguyên

export class InOutService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getInOuts', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    saveInOut(inOut: InOut) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveInOut', inOut).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getInOut(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getInOut/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
