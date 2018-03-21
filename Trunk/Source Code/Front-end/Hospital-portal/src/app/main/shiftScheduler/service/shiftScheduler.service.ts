import { ApiService } from '../../../api.service';
import { Injectable } from '@angular/core';
import { ShiftDay } from '../shared/shiftDay.model';
import { Shift } from '../shared/shift.model';
import { CreateShiftDay } from '../shared/createShiftDay.model';
import { CreateShift } from '../shared/createShift.model';
import { CreateShiftScheduler } from '../shared/createShiftScheduler.model';

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
    [{ shiftDayID: 0, dayInWeek: 'Mon', shiftScheduleId: 0, shiftDay: d.toLocaleDateString(), shiftList: [] }];
  let tue: Date ;
        tue = d;
  tue.setDate(tue.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Tue', shiftScheduleId: 0, shiftDay: tue.toLocaleDateString(), shiftList: [] });
  tue.setDate(tue.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Wed', shiftScheduleId: 0, shiftDay: tue.toLocaleDateString(), shiftList: [] });
  tue.setDate(tue.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Thu', shiftScheduleId: 0, shiftDay: tue.toLocaleDateString(), shiftList: [] });
  tue.setDate(tue.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Fri', shiftScheduleId: 0, shiftDay: tue.toLocaleDateString(), shiftList: [] });
  tue.setDate(tue.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Sat', shiftScheduleId: 0, shiftDay: tue.toLocaleDateString(), shiftList: [] });
  tue.setDate(tue.getDate() + 1);
  scheduler.shiftDayList.push( { shiftDayID: 0, dayInWeek: 'Sun', shiftScheduleId: 0, shiftDay: tue.toLocaleDateString(), shiftList: [] });


    }
    createMission(shiftSchedule: CreateShiftScheduler){
        return new Promise((resolve, reject) => {
            this.apiService.post('createShiftScheduler', shiftSchedule).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
 }
