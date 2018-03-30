import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { MeetingService } from './service/meeting.service';
import { Meeting } from './shared/meeting.model';
import { RoomService } from '../room/service/room.service';
import { Room } from '../room/shared/room.model';
import { CookieService } from 'ngx-cookie-service';

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
    rooms: Room[] = [];
    roleCookie: number;
    constructor(private route: ActivatedRoute, private router: Router, private meetingService: MeetingService,
        private roomService: RoomService, private cookieService: CookieService) {

    }

    back() {
        this.router.navigate(['/main/meeting-list']);
    }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3 || this.roleCookie == 5) {
            // this.loadingService.start();
            this.roomService.getList().then((res: Room[]) => {
                this.rooms = res;
                if (this.id == 0) this.meeting.roomId = this.rooms[0].roomId;
            }).catch(err => {
                alert(err);
            });
            this.routerSubcription = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number        
                // this.meetingService.getList().then((meetings: Meeting[]) => {
                //     this.meetings = meetings;
                //     if (this.id == 0) this.meeting.meetingId = meetings[0].meetingId;
                // });
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
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
    }
    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.meeting.createBy = +this.cookieService.get("Auth-UserId");
            this.meeting.updateBy = +this.cookieService.get("Auth-UserId");
            console.log(this.meeting);
            if (this.id > 0) {
                this.meetingService.updateMeeting(this.meeting).then(() => {
                    console.log(this.meeting);
                    alert("Save success");
                    this.router.navigate(['/main/manage-meeting']);
                }).catch(err => {
                    alert(err);
                });
            } else {
                this.meetingService.createMeeting(this.meeting).then(() => {
                    console.log(this.meeting);
                    alert("Save success");
                    this.router.navigate(['/main/manage-meeting']);
                }).catch(err => {
                    alert(err);
                });
            }
        });
    }
}
