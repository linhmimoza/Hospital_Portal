import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from './shared/meeting.model';
import { MeetingService } from './service/meeting.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
declare var $: any;
@Component({
    selector: 'manage-meeting',
    templateUrl: './manage-meeting.component.html',
    styleUrls: ['manage-meeting.component.css']
})
export class ManageMeetingComponent {
    popoverTitle: string = 'Are you sure?';
    popoverMessage: string = 'Are you really <b>sure</b> you want to do this?';
    confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
    cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
    confirmDenyText: string = 'Deny';
    confirmAcceptText: string = 'Accept';
    confirmClicked: boolean = false;
    cancelClicked: boolean = false;

    checkedMeetings: Meeting[] = [];
    waitingMeetings: Meeting[] = [];
    roleCookie: number;

    p: number = 1;

    constructor(private router: Router,
        private meetingService: MeetingService, private cookieService: CookieService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie === 2) {
            this.loadChecked();
            this.loadWaiting();
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
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

    switchStatusCheckedMeetings(meeting: Meeting) {
        if (meeting.status == 2) {
            this.denyWaitingMeetings(meeting);
        } else {
            this.acceptWaitingMeetings(meeting);
        }
    }

    denyWaitingMeetings(meeting: Meeting) {
        meeting.status = 3;
        this.meetingService.updateMeeting(meeting).then(() => {
            this.notificationService.success("Success");
            this.loadChecked();
            this.loadWaiting();
        });
    }

    acceptWaitingMeetings(meeting: Meeting) {
        this.meetingService.testMetting(meeting).then((res: Meeting[]) => {
            if (res.length > 0) {
                console.log(res);
                this.notificationService.error(this.meetingService.getMessage(res));
            } else {
                meeting.status = 2;
                this.meetingService.updateMeeting(meeting).then(() => {
                    this.notificationService.success('Success');
                    this.loadChecked();
                    this.loadWaiting();
                });
            }
        }).catch(err => {
            alert(err);
        });
    }
}
