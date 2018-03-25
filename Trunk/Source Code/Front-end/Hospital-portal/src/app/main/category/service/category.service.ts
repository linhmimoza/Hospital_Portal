import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Category } from '../shared/category.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class CategoryService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListCategory').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getCategory(id) {

    }

    updateCategory(category: Category){

    }

    createCategory(category: Category){

    }

    deleteCategory(){
        
    }
}