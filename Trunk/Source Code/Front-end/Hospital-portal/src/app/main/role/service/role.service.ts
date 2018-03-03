import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Role } from '../shared/role.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class RoleService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getRoles').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}