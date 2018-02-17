import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { User } from '../shared/user.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class UserService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getUsers', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    saveUser(user: User) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveUser', user).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getUser(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getUser/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    
    deleteUser(id) {
        return new Promise<User>((resolve, reject) => {
            this.apiService.get(`api/deteleUser/${id}`).then(() => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}
