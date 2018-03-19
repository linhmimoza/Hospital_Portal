import { ApiService } from '../../../api.service';
import { Injectable } from '@angular/core';
import { ShiftDay } from '../shared/shiftDay.model';
import { Shift } from '../shared/shift.model';

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
    addShiftToDay(date: ShiftDay) {
      let  listShift : Shift[] = date.shiftList;
      let shift: Shift;
      listShift.push(shift);
      return listShift;

    }
 }
