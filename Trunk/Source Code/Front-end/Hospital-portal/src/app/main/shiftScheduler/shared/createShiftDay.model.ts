import { CreateShift } from './createShift.model';

export class CreateShiftDay {
    shiftDayID: number;
    shiftDay: Date;
    dayInWeek: string;
    shiftScheduleId: number;
    shiftList: CreateShift[];
    constructor(dayInWeek: string) {
this.dayInWeek = dayInWeek;
    }


}
