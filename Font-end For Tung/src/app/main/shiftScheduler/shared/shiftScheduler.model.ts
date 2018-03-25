import { ShiftDay } from './shiftDay.model';

export class ShiftScheduler {
    shiftScheduleId: number;
    startDate: string;
    endDate: string;
    status: number;
    createDate: string;
    updateDate: string;
    departmentId: number;
    createby: number;
    updateby: number;
    shiftDayList: ShiftDay[];
    constructor() {

    }
}
