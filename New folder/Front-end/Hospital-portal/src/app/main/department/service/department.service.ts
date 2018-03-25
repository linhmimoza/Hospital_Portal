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
    getDepartment(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getDepartmentById/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateDepartment(department: Department){
        return new Promise((resolve, reject) => {
            this.apiService.post('updateDepartment', department).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    createDepartment(department: Department){
        return new Promise((resolve, reject) => {
            this.apiService.post('createDepartment', department).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    deleteDepartment(id){
        return new Promise((resolve, reject) => {
            this.apiService.get(`deleteDepartment/${id}`).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}