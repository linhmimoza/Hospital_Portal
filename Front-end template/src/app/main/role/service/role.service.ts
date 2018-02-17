import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Role } from './../shared/role.model';

@Injectable()// dùng để chưa sẽ tài nguyên

export class RoleService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getRoles', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    saveRole(role: Role) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveRole', role).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getRole(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getRole/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    deleteRole(id){
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/deleteRole/${id}`).then(res =>{
                
            }).catch(err => {
                reject(err);
            })
        })
    }
}
