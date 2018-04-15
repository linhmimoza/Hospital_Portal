import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from './shared/meeting.model';
import { MeetingService } from './service/meeting.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';

@Component({
    selector: 'manageMeeting-Scheduler',
    templateUrl: './manageMeeting-Scheduler.component.html'
    // styleUrls: ['manage-mission.component.css']
})
export class ManageMeetingSchedulerComponent {
    waitingMeetings: Meeting[] = [];
    roleCookie: number;
    userName: string;
    constructor(private router: Router,
        private meetingService: MeetingService, private cookieService: CookieService, private notificationService: NotificationService) { }

        ngOnInit() {
            this.roleCookie = +this.cookieService.get('Auth-RoleId');
            this.userName = this.cookieService.get('Auth-Username');
            if (this.roleCookie === 3) {
                this.loadWaiting();
            } else if (isNaN(this.roleCookie)) {
                alert('You don\'t have permission to view this page!');
                this.router.navigate(['/login']);
            } else {
                alert('You don\'t have permission to view this page!');
                this.router.navigate(['/main/hospital-portal']);
            }
        }
        loadWaiting() {
            this.meetingService.getAllByUser(this.cookieService.get('Auth-UserId')).then((res: Meeting[]) => {
                this.waitingMeetings = res;
                // console.log(this.users);
            }).catch(err => {
                alert(err);
                // this.loadingService.stop();
            });
        }
        detail(meeting: Meeting) {
            this.router.navigate(['/main/meeting-detail', meeting.meetingId]);
        }
}
