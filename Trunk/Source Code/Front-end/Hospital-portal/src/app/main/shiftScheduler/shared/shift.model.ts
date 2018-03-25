import { ShiftWorker } from './shiftWorker.model';

export class Shift {
    shiftId: number;
    shiftNO: number;
    startTime: string;
    endTime: string;
    other: string;
    shiftDayID: number;
    shiftWorkerList: ShiftWorker[];
    constructor() {

    }
}
