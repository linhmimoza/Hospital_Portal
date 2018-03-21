import { Select } from '../../select/share/select.model';

export class CreateShift {
    shiftId: number;
    shiftNO: number;
    startTime: string;
    endTime: string;
    other: string;
    shiftDayID: number;
    shiftWorkerList: Select[];
    constructor() {

    }
}
