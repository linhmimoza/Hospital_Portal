import { MissionWorker } from './missionWorker.model';

export class Mission {
    missionId: number;
    startDate: Date;
    endDate: Date;
    place: string;
    content: string;
    note: string;
    status: number;
    createBy: number;
    createDate: Date;
    updateBy: number;
    updateDate: Date;
    missionWorkerList: MissionWorker[];
    constructor() {

    }
}
