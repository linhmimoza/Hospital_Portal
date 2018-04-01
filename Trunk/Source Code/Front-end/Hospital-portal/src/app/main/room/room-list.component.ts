import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from './shared/room.model';
import { RoomService } from './service/room.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';

@Component({
    selector: 'room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['room-list.component.css']
})
export class RoomListComponent {
    popoverTitle: string = 'Are you sure?';
    popoverMessage: string = 'Are you really <b>sure</b> you want to do this?';
    confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
    cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
    confirmClicked: boolean = false;
    cancelClicked: boolean = false;

    p: number = 1;
    rooms: Room[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private roomService: RoomService, private cookieService: CookieService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 1) {
            // this.loadingService.start();
            this.roomService.getList().then((res: Room[]) => {
                this.rooms = res;
            }).catch(err => {
                alert(err);
                // this.loadingService.stop();
            });
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
    }


    ngAfterViewInit() {

    }

    detail(room: Room) {
        this.router.navigate(['/main/room-detail', room.roomId]);
    }

    switchStatus(room: Room) {
        if (room.status == 1) {
            room.status = 2;
        } else {
            room.status = 1;
        }
        this.roomService.updateRoom(room).then(() => {
            this.notificationService.success("Success");
            this.roomService.getList().then((res: Room[]) => {
                this.rooms = res;
            }).catch(err => {
                alert(err);
            });
        });
    }

}