import { CreateShiftDay } from './createShiftDay.model';

export class CreateShiftScheduler {
    shiftScheduleId: number;
    week: String;
    status: number;
    createDate: string;
    updateDate: string;
    departmentId: number;
    createby: number;
    updateby: number;
    shiftDayList: CreateShiftDay[];
    constructor() {

    }
}
