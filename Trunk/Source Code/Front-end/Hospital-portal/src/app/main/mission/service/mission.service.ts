import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Mission } from '../shared/mission.model';


@Injectable()// dùng để chưa sẽ tài nguyên

export class MissionService {
    constructor(private apiService: ApiService) { }
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListMission').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getWaitingMissions() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getWaitingMissions').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getCheckedMissions() {
        return new Promise((resolve, reject) => {
            this.apiService.get('getCheckedMissions').then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getByUser(userId) {
        return new Promise((resolve, reject) => {
            this.apiService.get('geMissionByUser/' + userId).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getMission(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`getMissionById/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateMission(mission: Mission) {
        return new Promise((resolve, reject) => {
            this.apiService.post('updateMission', mission).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    createMission(mission: Mission){
        return new Promise((resolve, reject) => {
            this.apiService.post('createMission', mission).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    // deleteDepartment(id){
    //     return new Promise((resolve, reject) => {
    //         this.apiService.get(`deleteDepartment/${id}`).then(res => {
    //             resolve();
    //         }).catch(err => {
    //             reject(err);
    //         });
    //     });
    // }
}