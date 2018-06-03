import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { MeetingService } from './service/meeting.service';
import { Meeting } from './shared/meeting.model';
import { RoomService } from '../room/service/room.service';
import { Room } from '../room/shared/room.model';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    form: any;
    responseText: string;
    constructor(private route: ActivatedRoute, private router: Router, private meetingService: MeetingService,
        private roomService: RoomService, private cookieService: CookieService, private notificationService: NotificationService) {

    }

    back() {
        if (this.roleCookie === 2) {
            this.router.navigate(['/main/manage-meeting']);
        } else {
            this.router.navigate(['/main/manageMeeting-Scheduler']);
        }
    }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3) {
            this.form = new FormGroup({
                meetingId: new FormControl(''),
                roomId: new FormControl(''),
                meetingName: new FormControl('', [
                    Validators.required
                ]),
                startTime: new FormControl('', [
                    Validators.required
                ]),
                date: new FormControl('', [
                    Validators.required
                ]),
                duration: new FormControl(''),
                content: new FormControl('', [
                    Validators.required
                ]),
                note: new FormControl(''),
                createBy: new FormControl(''),
                updateBy: new FormControl(''),
                status: new FormControl('')
            });
            // this.loadingService.start();
            this.roomService.getList().then((res: Room[]) => {
                this.rooms = res;
                if (this.id == 0) {
                    this.form.patchValue({
                        roomId: this.rooms[0].roomId
                    });
                }
            }).catch(err => {
                alert(err);
            });
            this.routerSubcription = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number        
                if (this.id > 0) {
                    this.title = "You are updating meeting";
                    this.meetingService.getMeeting(this.id).then((res: Meeting) => {
                        this.meeting = res;
                        this.form.patchValue({
                            meetingId: this.id,
                            roomId: this.meeting.roomId,
                            meetingName: this.meeting.meetingName,
                            startTime: this.meeting.startTime,
                            duration: this.meeting.duration,
                            date: this.meeting.date,
                            content: this.meeting.content,
                            note: this.meeting.note,
                            updateBy: this.cookieService.get("Auth-UserId")
                        });
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    this.title = 'You are creating new meeting';
                    this.form.patchValue({
                        updateBy: this.cookieService.get("Auth-UserId"),
                        createBy: this.cookieService.get("Auth-UserId")
                    });
                }
            });
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/home/main']);
        }
    }

    get meetingName() {
        return this.form.get("meetingName");
    }

    get roomId() {
        return this.form.get("roomId");
    }

    get startTime() {
        return this.form.get("startTime");
    }

    get duration() {
        return this.form.get("duration");
    }

    get date() {
        return this.form.get("date");
    }

    get content() {
        return this.form.get("content");
    }

    get note() {
        return this.form.get("note");
    }

    onFormSubmit(meeting: Meeting) {
        if (this.form.valid) {
            console.log(meeting);
            this.save(meeting);
        } else {
            alert('Invalid format');
        }
    }

    save(meeting: Meeting) {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            // meeting.createBy = +this.cookieService.get("Auth-UserId");
            // meeting.updateBy = +this.cookieService.get("Auth-UserId");

            if (this.id > 0) {
                meeting.status = 1;
                this.meetingService.updateMeeting(meeting).then((res: string) => {
                    this.responseText = res;
                    if (this.responseText === 'Success') {
                        this.notificationService.success(this.responseText).then(() => {
                            if (this.roleCookie === 2) {
                                this.router.navigate(['/main/manage-meeting']);
                            } else {
                                this.router.navigate(['/main/manageMeeting-Scheduler']);
                            }
                        });
                    } else {
                        this.notificationService.fail(this.responseText);
                    }
                }).catch(err => {
                    alert(err);
                });
            } else {
                this.meetingService.createMeeting(meeting).then((res: string) => {
                    this.responseText = res;
                    if (this.responseText === "Success") {
                        this.notificationService.success(this.responseText).then(() => {
                            if (this.roleCookie === 2) {
                                this.router.navigate(['/main/manage-meeting']);
                            } else {
                                this.router.navigate(['/main/manageMeeting-Scheduler']);
                            }
                        });
                    } else {
                        this.notificationService.fail(this.responseText);
                    }
                }).catch(err => {
                    alert(err);
                });
            }
        });
    }
}
