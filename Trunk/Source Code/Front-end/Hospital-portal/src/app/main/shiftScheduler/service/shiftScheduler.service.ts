import { ApiService } from '../../../api.service';
import { Injectable } from '@angular/core';
import { ShiftDay } from '../shared/shiftDay.model';
import { Shift } from '../shared/shift.model';
import { CreateShiftDay } from '../shared/createShiftDay.model';
import { CreateShift } from '../shared/createShift.model';
import { ShiftSchedulerManager } from '../shared/ShiftSchedulerManager.model';
import { CreateShiftScheduler } from '../shared/createShiftScheduler.model';
import { ShiftScheduler } from '../shared/shiftScheduler.model';

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
    getListByUpload(uploadBy: number) {
        return new Promise((resolve, reject) => {
            this.apiService.get('getListShiftSchedulerByUpload?uploadBy=' + uploadBy).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getCheckedByWeek(week, depId) {
        return new Promise((resolve, reject) => {
            this.apiService.get('getCheckedSchedulerForShow?DepartmentId=' + depId + '&Week=' + week).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
    getWaitingByWeek(week, depId) {
        return new Promise((resolve, reject) => {
            this.apiService.get('getWaitingSchedulerForCheck?DepartmentId=' + depId + '&Week=' + week).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }
getListManager() {
    return new Promise((resolve, reject) => {
        this.apiService.get('getListManager').then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
getFutureManagerByDepartmentId(depId, week) {
    return new Promise((resolve, reject) => {
        this.apiService.get('getFutureManagerByDepartmentId?DepartmentId=' + depId + '&Week=' + week).then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
getSearchManager(depId, week) {
    return new Promise((resolve, reject) => {
        this.apiService.get('getSearchManager?DepartmentId=' + depId + '&Week=' + week).then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
getPassManagerByDepartmentId(depId, week) {
    return new Promise((resolve, reject) => {
        this.apiService.get('getPassManagerByDepartmentId?DepartmentId=' + depId + '&Week=' + week).then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
setListManager(list: ShiftSchedulerManager[]){
    list.forEach(function(manage){
        let today = manage.week;
        if (today != null) {
        let  week= parseInt(today.substring(6, 8), 10);
        let  year=  parseInt(today.substring(0, 4), 10);
          let d = new Date(year, 0, 1),
          offset = d.getTimezoneOffset();
      d.setDate(d.getDate() + 4 - (d.getDay() || 7));
      d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000
          * (week + (year === d.getFullYear() ? -1 : 0 )));
      d.setTime(d.getTime()
          + (d.getTimezoneOffset() - offset) * 60 * 1000);
      d.setDate(d.getDate() - 3);
      let result = d.toLocaleDateString() + '-';
      d.setDate(d.getDate() + 6);
      result = result + d.toLocaleDateString();
      manage.range = result;
        }
    });
        return list;
}

    addShiftToALLDay(dates: CreateShiftDay[], star: string, end: string) {
        dates.forEach(function(date) {
        let  listShift : CreateShift[] = date.shiftList;
        let shift: CreateShift = {'endTime': end, 'shiftDayID': 0, 'shiftId': 0, 'shiftNO': date.shiftList.length,
         'shiftWorkerList': [], 'startTime': star, 'other': ''};
        listShift.push(shift);
      });
      return dates;
    }



    addShiftToDay(date: CreateShiftDay) {
      let  listShift : CreateShift[] = date.shiftList;
      let shift: CreateShift = {'endTime': '', 'shiftDayID': 0, 'shiftId': 0, 'shiftNO': date.shiftList.length,
       'shiftWorkerList': [], 'startTime': '', 'other': ''};
      listShift.push(shift);
      return listShift;

    }
    dateFullWeek(today: String, scheduler: CreateShiftScheduler) {
      let  week= parseInt(today.substring(6, 8), 10);
      let  year=  parseInt(today.substring(0, 4), 10);
        let d = new Date(year, 0, 1),
        offset = d.getTimezoneOffset();

    // ISO: week 1 is the one with the year's first Thursday
    // so nearest Thursday: current date + 4 - current day number
    // Sunday is converted from 0 to 7
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));

    // 7 days * (week - overlapping first week)
    d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000
        * (week + (year === d.getFullYear() ? -1 : 0 )));

    // daylight savings fix
    d.setTime(d.getTime()
        + (d.getTimezoneOffset() - offset) * 60 * 1000);

    // back to Monday (from Thursday)
    d.setDate(d.getDate() - 3);
    scheduler.shiftDayList =
    [{ shiftDayID: 0, dayInWeek: 'Mon', shiftScheduleId: 0, shiftDay: d, shiftList: [] }];
  let tue = new  Date(d.getFullYear(), d.getMonth(), 1) ;
  tue.setDate(d.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Tue', shiftScheduleId: 0, shiftDay: tue, shiftList: [] });
  let wed = new  Date(d.getFullYear(), d.getMonth(), 1) ;
  wed.setDate(tue.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Wed', shiftScheduleId: 0, shiftDay: wed, shiftList: [] });
  let thu = new  Date(d.getFullYear(), d.getMonth(), 1) ;
  thu.setDate(wed.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Thu', shiftScheduleId: 0, shiftDay: thu, shiftList: [] });
  let fri = new  Date(d.getFullYear(), d.getMonth(), 1) ;
  fri.setDate(thu.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Fri', shiftScheduleId: 0, shiftDay: fri, shiftList: [] });
  let sat = new  Date(d.getFullYear(), d.getMonth(), 1) ;
  sat.setDate(fri.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Sat', shiftScheduleId: 0, shiftDay: sat, shiftList: [] });
  let sun = new Date(d.getFullYear(), d.getMonth(), 1) ;
  sun.setDate(sat.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Sun', shiftScheduleId: 0, shiftDay: sun, shiftList: [] });
    }
    createMission(shiftSchedule: CreateShiftScheduler) {
        return new Promise((resolve, reject) => {
            this.apiService.post('createShiftScheduler', shiftSchedule).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }

    checkValidateScheduler(num: number, week: String, DepId: number, shiftSchedule: CreateShiftScheduler, valid: Boolean) {
     valid = true;
     if (DepId === 0) {
        valid = false;
     }
     if (week === '') {
        valid = false;
     }
     shiftSchedule.shiftDayList.forEach(function(day) {
        day.shiftList.forEach(function(shift) {
            if (shift.shiftWorkerList.length !== num) {
                valid = false;
            }
        });
     });
     return valid;
    }
    getThisWeek() {
        let today = new Date();
        let onejan = new Date(today.getFullYear(), 0, 1);
        let week=Math.ceil((((today.getTime() - onejan.getTime()) / 86400000) + onejan.getDay())/ 7 );
        let thisWeek = today.getFullYear() + '-W' + week;
       return thisWeek;
    }
    
    weekToDate(today: String){
        let  week= parseInt(today.substring(6, 8), 10);
        let  year=  parseInt(today.substring(0, 4), 10);
          let d = new Date(year, 0, 1),
          offset = d.getTimezoneOffset();
      d.setDate(d.getDate() + 4 - (d.getDay() || 7));
      d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000
          * (week + (year === d.getFullYear() ? -1 : 0 )));
      d.setTime(d.getTime()
          + (d.getTimezoneOffset() - offset) * 60 * 1000);
      d.setDate(d.getDate() - 3);
      let result = d.toLocaleDateString() + '-';
      d.setDate(d.getDate() + 6);
      result = result + d.toLocaleDateString();
      return result;
    }
    checkScheduler(shiftSchedule: ShiftScheduler) {
        return new Promise((resolve, reject) => {
            this.apiService.post('checkShiftScheduler', shiftSchedule).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
    testScheduler(shiftSchedule: ShiftScheduler) {
        return new Promise((resolve, reject) => {
            this.apiService.post('testShiftScheduler', shiftSchedule).then(res => {
                resolve(res.text());
            }).catch(err => {
                reject(err);
            });
        });
    }
    checkSchedulerManager(manage: ShiftSchedulerManager) {
        return new Promise((resolve, reject) => {
            this.apiService.post('checkShiftSchedulerManager', manage).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
 }
