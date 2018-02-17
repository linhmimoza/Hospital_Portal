import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Category } from './../shared/category.model';

@Injectable()// dùng để chưa sẽ tài nguyên

export class CategoryService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getCategories', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    saveCate(category: Category) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveCategory', category).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getCate(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getCategory/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}
