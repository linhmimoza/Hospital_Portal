import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Notification } from '../shared/notification.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class NotificationComponentService {

    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListNotification').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    getNotificationById(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getNotificationById/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateNotification(notification: Notification) {
        return new Promise((resolve, reject) => {
            this.apiService.post('updateNotification', notification).then(res => {
                resolve(res.text());
            }).catch(err => {
                reject(err);
            });
        });
    }

    createNotification(notification: Notification){
        return new Promise((resolve, reject) => {
            this.apiService.post('createNotification', notification).then(res => {
                resolve(res.text());
            }).catch(err => {
                reject(err);
            });
        });
    }

    deleteNotification(id){
        return new Promise((resolve, reject) => {
            this.apiService.get(`deleteNotification/${id}`).then(res => {
                resolve(res.text());
            }).catch(err => {
                reject(err);
            });
        });
    }
}