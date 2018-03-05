import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Article } from '../shared/article.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class ArticleService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListArticle').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getArticle(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getArticleById/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateArticle(article: Article){
        return new Promise((resolve, reject) => {
            this.apiService.post('updateArticle', article).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    createArticle(article: Article){
        return new Promise((resolve, reject) => {
            this.apiService.post('createArticle', article).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    deleteArticle(id){
        return new Promise((resolve, reject) => {
            this.apiService.get(`deleteArticle/${id}`).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}