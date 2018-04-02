import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { RoomService } from './service/room.service';
import { Room } from './shared/room.model';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../extra/notification.service';

@Component({
    selector: 'room-detail',
    templateUrl: './room-detail.component.html'
})
export class RoomDetailComponent {
    form: any;
    room = new Room();
    routerSubcription: any;
    id: number = 0;
    title: string;
    rooms: Room[] = [];
    roleCookie: number;
    responseText: string;
    constructor(private route: ActivatedRoute, private router: Router, private roomService: RoomService,
        private cookieService: CookieService, private notificationService: NotificationService) {

    }
    back() {
        this.router.navigate(['/main/room-list']);
    }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 1) {
            // this.loadingService.start();
            // this.roleService.getList().then((res: Role[]) => {
            //     this.roles = res;
            //     console.log(this.roles);
            // }).catch(err => {
            //     alert(err);
            // });
            this.form = new FormGroup({
                roomName: new FormControl('', [
                    Validators.required,
                    Validators.minLength(4)
                ]),
                roomSize: new FormControl('', [
                    Validators.required
                ]),
                roomId: new FormControl(''),
                status: new FormControl('')
            });
            this.routerSubcription = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number        
                this.roomService.getList().then((rooms: Room[]) => {
                    this.rooms = rooms;
                    if (this.id == 0) this.room.roomId = rooms[0].roomId;
                });
                if (this.id > 0) {
                    this.title = "You are updating room information";
                    this.roomService.getRoom(this.id).then((res: Room) => {
                        this.room = res;
                        this.form.patchValue({
                            roomName: this.room.roomName,
                            roomSize: this.room.roomSize,
                            roomId: this.id,
                            status: this.room.status
                        });
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    this.title = "You are creating new room information";
                }
            });

        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
    }

    get roomName() {
        return this.form.get('roomName');
    }

    get roomSize() {
        return this.form.get('roomSize');
    }

    onFormSubmit(room: Room) {
        if (this.form.valid) {
            console.log(room);
            this.save(room);
        } else {
            alert('Invalid format');
        }
    }

    save(room: Room) {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.roomService.updateRoom(room).then((res: string) => {
                    this.responseText = res;
                    if (this.responseText === "Success") {
                        this.notificationService.success(this.responseText).then(() => {
                            this.router.navigate(['/main/room-list']);
                        });
                    } else {
                        this.notificationService.fail("Fail");
                    }
                }).catch(err => {
                    alert(err);
                });
            } else {
                this.roomService.createRoom(room).then((res: string) => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    this.responseText = res;
                    if (this.responseText === "Success") {
                        this.notificationService.success(this.responseText).then(() => {
                            this.router.navigate(['/main/room-list']);
                        });
                    } else {
                        this.notificationService.fail("Fail");
                    }
                }).catch(err => {
                    alert(err);
                });
            }
        });
    }
}