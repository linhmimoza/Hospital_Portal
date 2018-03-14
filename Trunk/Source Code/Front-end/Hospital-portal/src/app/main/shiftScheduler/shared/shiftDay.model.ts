import { Shift } from './shift.model';


export class ShiftDay {
    shiftDayID: number;
    shiftDay: string;
    dayInWeek: string;
    shiftScheduleId: number;
    shiftList: Shift[];
    constructor(dayInWeek: string) {
this.dayInWeek = dayInWeek;
    }


}
