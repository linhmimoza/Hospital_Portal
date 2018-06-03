import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { BookingDetail } from '../shared/booking-detail.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class BookingDetailService {
    constructor(private apiService: ApiService) { }

    getBookingDetail(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListCategory').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
}