import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from './shared/meeting.model';
import { MeetingService } from './service/meeting.service';

@Component({
    selector: 'meeting-list',
    templateUrl: './meeting-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class MeetingListComponent {

    meetings: Meeting[] = [];

    constructor(private router: Router,
        private meetingService: MeetingService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.meetingService.getList().then((res: Meeting[]) => {
            this.meetings = res;
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
        // this.departmentService.deleteDepartment(department.departmentId).then(() => {
            // window.location.reload();
            this.router.navigateByUrl('/main/meeting-list');
        // });

    }
}