import { ApiService } from "../../../api.service";
import { Injectable } from "@angular/core";
import { Product } from "./../shared/product.model";

@Injectable()
export class ProductService {
    constructor(private apiService: ApiService) { }

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getProducts', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getProduct/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    saveProduct(product: Product) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveProduct', product).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}