import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from './shared/meeting.model';
import { MeetingService } from './service/meeting.service';
declare var $: any;
@Component({
    selector: 'meeting-list',
    templateUrl: './meeting-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class MeetingListComponent {
    fPage = 0;
    pPage = 0;
    fromDate: string;
    toDate: string;
    futureMeetings: Meeting[] = [];
    passMeetings: Meeting[] = [];
    constructor(private router: Router,
        private meetingService: MeetingService) { }

    ngOnInit() {
        this.loadFuture();
        this.loadPass();
    }

    ngAfterViewInit() {

    }

    loadFuture() {
        this.fPage = this.fPage + 1;
        this.meetingService.getFutureMeeting(this.fPage).then((res: Meeting[]) => {
            this.futureMeetings = res;
        }).catch(err => {
            alert(err);
        });
    }

    loadPass() {
        this.pPage = this.pPage + 1;
        this.meetingService.getPassMeeting(this.pPage).then((res: Meeting[]) => {
            this.passMeetings = res;
        }).catch(err => {
            alert(err);

        });
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

    search(){
        console.log(this.fromDate);
        console.log(this.toDate);
    }

}
