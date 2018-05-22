import { Shift } from './shift.model';


export class ShiftDay {
    shiftDayID: number;
    shiftDay: Date;
    dayInWeek: string;
    shiftScheduleId: number;
    shiftList: Shift[];
    constructor(dayInWeek: string) {
this.dayInWeek = dayInWeek;
    }


}
