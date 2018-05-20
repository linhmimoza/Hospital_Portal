import { Injectable } from '@angular/core';
import { ApiService } from './../../../api.service';
import { Mission } from '../shared/mission.model';
import { ShiftDay } from '../../shiftScheduler/shared/shiftDay.model';


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
    getAllByUser(userId) {
        return new Promise((resolve, reject) => {
            this.apiService.get('geAllMissionByUser/' + userId).then(res => {
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
                resolve(res.text());
            }).catch(err => {
                reject(err);
            });
        });
    }
    activateMission(mission: Mission) {
        return new Promise((resolve, reject) => {
            this.apiService.post('activateMission', mission).then(res => {
                resolve(res.text());
            }).catch(err => {
                reject(err);
            });
        });
    }
    createMission(mission: Mission) {
        return new Promise((resolve, reject) => {
            this.apiService.post('createMission', mission).then(res => {
                resolve(res.text());
            }).catch(err => {
                reject(err);
            });
        });
    }
    testUser(mission: Mission) {
        return new Promise((resolve, reject) => {
            this.apiService.post('testUser', mission).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    testDate(mission: Mission) {
        return new Promise((resolve, reject) => {
            this.apiService.post('testDate', mission).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getMessage(mission: Mission[]){
        let s = '';
        mission.forEach(function(m) {
            s = s + m.missionWorkerList[0].userName + ' has a mission to '
            + m.place + ' from ' + m.startDate + ' to ' + m.endDate + '\n';
        });
        return s;
    }
    getMessage2(shiftDay: ShiftDay[]) {
        let s = 'There are some duplication with shift schedule \n';
        shiftDay.forEach(function(m) {
            s = s + m.dayInWeek + ' : '
            + m.shiftDay + '\n';
        });
        return s;
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