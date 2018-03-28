import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from './shared/meeting.model';
import { MeetingService } from './service/meeting.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
@Component({
    selector: 'manage-meeting',
    templateUrl: './manage-meeting.component.html',
    styleUrls:['manage-meeting.component.css']
})
export class ManageMeetingComponent {
    checkedMeetings: Meeting[] = [];
    waitingMeetings: Meeting[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private meetingService: MeetingService, private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3 || this.roleCookie == 5) {
            this.loadChecked();
            this.loadWaiting();
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
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

    detail(meeting: Meeting) {
        this.router.navigate(['/main/meeting-detail', meeting.meetingId]);
    }

    delete(meeting: Meeting) {
        this.meetingService.deleteMeeting(meeting.meetingId).then(() => {

        });
    }
}
