import { MissionWorker } from './missionWorker.model';

export class Mission {
    missionId: number;
    startDate: Date;
    endDate: Date;
    place: string;
    content: string;
    note: string;
    status: number;
    createby: number;
    createDate: Date;
    updateby: number;
    updateDate: Date;
    missionWorkerList: MissionWorker[];
    constructor() {

    }
}
