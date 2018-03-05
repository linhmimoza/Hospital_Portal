import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Department } from '../shared/department.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class DepartmentService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListDepartment').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}