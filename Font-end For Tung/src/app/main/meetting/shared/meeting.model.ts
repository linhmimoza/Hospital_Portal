import { Time } from "@angular/common";

export class Meeting {
    meetingId: number;
    roomId: number;
    roomName: string;
    meetingName: string;
    startTime: Time;
    date: Date;
    duration: Time;
    content: string;
    note: string;
    createBy: number;
    createDate: Date;
    updateBy: number;
    updateDate: Date;
    status: number;
 

    
    constructor() {
    
    }
}
