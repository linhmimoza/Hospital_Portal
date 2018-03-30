import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from './shared/room.model';
import { RoomService } from './service/room.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'room-list',
    templateUrl: './room-list.component.html',
    styleUrls:['room-list.component.css']
})
export class RoomListComponent {
    p: number = 1;
    rooms: Room[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private roomService: RoomService, private cookieService: CookieService) { }

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
        } else if (this.roleCookie == 0) {
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

    delete(room: Room) {
        // this.departmentService.deleteDepartment(department.departmentId).then(() => {
        // window.location.reload();
        this.router.navigateByUrl('/main/room-list');
        // });

    }
}