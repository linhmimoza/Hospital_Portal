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
    meetings: Meeting[] = [];
    constructor(private router: Router,
        private meetingService: MeetingService) { }

    ngOnInit() {

        this.meetingService.getList().then((res: Meeting[]) => {
            this.meetings = res;

            // console.log(this.users);
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }


    ngAfterViewInit() {

    }

    
}
