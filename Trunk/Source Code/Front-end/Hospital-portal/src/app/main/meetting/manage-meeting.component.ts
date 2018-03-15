import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from './shared/meeting.model';
import { MeetingService } from './service/meeting.service';
@Component({
    selector: 'manage-meeting',
    templateUrl: './manage-meeting.component.html'
    // styleUrls:['user-list.component.css']
})
export class ManageMeetingComponent {
    checkedMeetings: Meeting[] = [];
    waitingMeetings: Meeting[] = [];
    constructor(private router: Router,
        private meetingService: MeetingService) { }

    ngOnInit() {
        this.loadChecked();
        this.loadWaiting();
    }
loadChecked() {
    this.meetingService.getCheked().then((res: Meeting[]) => {
        this.checkedMeetings = res;

        // console.log(this.users);
    }).catch(err => {
        alert(err);
        // this.loadingService.stop();
    });
}

loadWaiting() {
    this.meetingService.getWaiting().then((res: Meeting[]) => {
        this.waitingMeetings = res;

        // console.log(this.users);
    }).catch(err => {
        alert(err);
        // this.loadingService.stop();
    });
}
    ngAfterViewInit() {

    }

    
}
