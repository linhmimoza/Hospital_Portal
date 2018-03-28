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


    getUser(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getUserById/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateUser(user: User) {
        return new Promise((resolve, reject) => {
            this.apiService.post('updateUser', user).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    createUser(user: User) {
        return new Promise((resolve, reject) => {
            this.apiService.post('createUser', user).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }

    deleteUser(id) {
        return new Promise<User>((resolve, reject) => {
            this.apiService.get(`deleteUser/${id}`).then(() => {
                // this.apiService.post('deleteUser', id).then(() => {
                resolve();
                alert("Success");
            }).catch(err => {
                reject(err);
                alert("Fail");
            });
        });
    }

    activeUser(id) {
        return new Promise<User>((resolve, reject) => {
            this.apiService.get(`activeUser/${id}`).then(() => {
                resolve();
                alert("Success");
            }).catch(err => {
                reject(err);
                alert("Fail");
            });
        });
    }

    loadUsersByDept(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getUserByDepartmentId/${id}`).then(res => {
                resolve(res.json());             
            }).catch(err => {
                reject(err);             
            });
        });
    }
}