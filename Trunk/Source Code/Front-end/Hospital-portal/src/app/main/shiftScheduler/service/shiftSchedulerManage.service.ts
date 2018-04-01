import { Injectable } from '@angular/core';
import { ShiftSchedulerManager } from '../shared/ShiftSchedulerManager.model';

@Injectable()
export class ManageService {
    selected: ShiftSchedulerManager = {'checked': 0 , 'departmentId': 0 , 'range': '',
    'waiting': 0 , 'week' : ''} ;

    constructor() {

    }

    setSelect(val: ShiftSchedulerManager){
      this.selected = val;
    }

    getSelect(){
      return this.selected;
    }
}