export class Meeting{
    meetingId: number;
    roomId: number;
    roomName: string;
    meetingName: string;
    startTime: Date;
    endTime: Date;
    content: string;
    note: string;
    createBy: number;
    createDate: Date;
    updateBy: number;
    updateDate: Date;
    status: number;

    constructor(){
        
    }
}