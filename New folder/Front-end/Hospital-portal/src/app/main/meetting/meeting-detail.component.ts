import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { MeetingService } from './service/meeting.service';
import { Meeting } from './shared/meeting.model';

@Component({
    selector: 'meeting-detail',
     templateUrl: './meeting-detail.component.html'
})
export class MeetingDetailComponent {
    meeting = new Meeting();
    routerSubcription: any;
    id: number = 0;
    title: string;
    meetings: Meeting[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private meetingService: MeetingService) {

    }
    back() {
        this.router.navigate(['/main/meeting-list']);
    }

    ngOnInit() {
        // this.loadingService.start();
        // this.roleService.getList().then((res: Role[]) => {
        //     this.roles = res;
        //     console.log(this.roles);
        // }).catch(err => {
        //     alert(err);
        // });
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number        
            this.meetingService.getList().then((meetings: Meeting[]) => {
                this.meetings = meetings;
                if (this.id == 0) this.meeting.meetingId = meetings[0].meetingId;
            });
            if (this.id > 0) {
                this.title = "You are updating meeting";
                this.meetingService.getMeeting(this.id).then((res: Meeting) => {
                    this.meeting = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "You are creating new meeting";
            }
        });
    }
    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.meetingService.updateMeeting(this.meeting).then(() => {
                    alert("Save success");
                    this.router.navigate(['/main/meeting-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            } else {
                this.meetingService.createMeeting(this.meeting).then(() => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    alert("Save success");
                    this.router.navigate(['/main/meeting-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            }
        });
    }
}
