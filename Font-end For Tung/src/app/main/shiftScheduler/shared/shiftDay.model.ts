import { Shift } from './shift.model';

export class ShiftDay {
    shiftDayID: number;
    shiftDay: string;
    dayInWeek: string;
    userName: string;
    shiftScheduleId: number;
    shiftList: Shift[];
    constructor() {

    }
}
