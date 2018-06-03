import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from '../meetting/shared/meeting.model';
import { MeetingService } from '../meetting/service/meeting.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
declare var $: any;

@Component({
    selector: 'article-list',
    templateUrl: './article-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class ArticleListComponent {

    waitingMeetings: Meeting[] = [];
    roleCookie: number;
    userName: string;
    constructor(private router: Router,
        private meetingService: MeetingService, private cookieService: CookieService, private notificationService: NotificationService) { }

        ngOnInit() {
            this.roleCookie = +this.cookieService.get('Auth-RoleId');
            this.userName = this.cookieService.get('Auth-Username');
            if (this.roleCookie >= 1) {
                this.loadWaiting();
            } else if (isNaN(this.roleCookie)) {
                alert('You don\'t have permission to view this page!');
                this.router.navigate(['/login']);
            } else {
                alert('You don\'t have permission to view this page!');
                this.router.navigate(['/home/main']);
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