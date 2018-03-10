import { ApiService } from '../../../api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ShiftSchedulerService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListShiftScheduler').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
 }
