import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { User } from '../shared/user.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class UserService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListUser').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}