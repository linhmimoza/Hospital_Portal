import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Meeting } from '../shared/meeting.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class MeetingService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListMeeting').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getCheked() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getCheckedMeeting').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getWaiting() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getWaitingMeeting').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getFutureMeeting(page: number) {
        return new Promise((resolve, reject) => {
            this.apiService.get('getFutureMeeting?page=' + page).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getPassMeeting(page: number) {
        return new Promise((resolve, reject) => {
            this.apiService.get('getPassMeeting?page=' + page).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getMeeting(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getMeetingById/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateMeeting(meeting: Meeting){
        return new Promise((resolve, reject) => {
            this.apiService.post('updateMeeting', meeting).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    createMeeting(meeting: Meeting){
        return new Promise((resolve, reject) => {
            this.apiService.post('createMeeting', meeting).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    deleteMeeting(id){
        return new Promise((resolve, reject) => {
            this.apiService.get(`deleteMeeting/${id}`).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}