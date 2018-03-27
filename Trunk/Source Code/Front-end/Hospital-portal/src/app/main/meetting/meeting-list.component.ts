import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from './shared/meeting.model';
import { MeetingService } from './service/meeting.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
declare var $: any;
@Component({
    selector: 'meeting-list',
    templateUrl: './meeting-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class MeetingListComponent {
    fPage = 0;
    pPage = 0;
    toDay: Date = new Date;
    fromDate: any;
    toDate: string;
    meetingInRange: Meeting[] = [];
    futureMeetings: Meeting[] = [];
    passMeetings: Meeting[] = [];
    selectMeeting: Meeting = new Meeting;
    form: any;
    constructor(private router: Router,
        private meetingService: MeetingService) { }

    ngOnInit() {

        this.fromDate = this.toDay.toUTCString;
        this.loadFuture();
        this.loadPass();
        this.loadScrip();
    }

    ngAfterViewInit() {
        this.loadScrip();
    }
    loadScrip() {
        $.getScript('assets/porto/javascripts/theme.init.js', function () {
            $.getScript('assets/porto/javascripts/theme.admin.extension.js', function () {
                $.getScript('assets/porto/javascripts/ui-elements/examples.modals.js', function () {

                });
            });
        });
    }
    loadFuture() {
        this.loadScrip();
        this.fPage = this.fPage + 1;
        this.meetingService.getFutureMeeting(this.fPage).then((res: Meeting[]) => {
            this.futureMeetings = res;
        }).catch(err => {
            alert(err);
        });
        this.loadScrip();
    }
    view(meet) {
        this.loadScrip();
        this.selectMeeting = meet;
        console.log(this.selectMeeting);
        this.loadScrip();
    }
    loadPass() {
        this.loadScrip();
        this.pPage = this.pPage + 1;
        this.meetingService.getPassMeeting(this.pPage).then((res: Meeting[]) => {
            this.passMeetings = res;
        }).catch(err => {
            alert(err);

        });
        this.loadScrip();
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
    from() {
        this.loadScrip();
        if (this.fromDate > this.toDate) {
            this.toDate = this.fromDate;

        }
        this.loadScrip();
    }
    to() {
        this.loadScrip();
        if (this.fromDate > this.toDate) {
            this.fromDate = this.toDate;

        }
        this.loadScrip();
    }
    search() {
        this.loadScrip();
        if (this.fromDate < '99/99/9999' && this.toDate < '99/99/9999') {
            this.meetingService.getInRange(this.fromDate, this.toDate).then((res: Meeting[]) => {
                this.meetingInRange = res;
            }).catch(err => {
                alert(err);

            });

        }
        this.loadScrip();
    }



}
