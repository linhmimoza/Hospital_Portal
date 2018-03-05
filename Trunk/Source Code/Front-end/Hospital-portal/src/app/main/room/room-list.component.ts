import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from './shared/room.model';
import { RoomService } from './service/room.service';

@Component({
    selector: 'room-list',
    templateUrl: './room-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class RoomListComponent {

    rooms: Room[] = [];

    constructor(private router: Router,
        private roomService: RoomService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.roomService.getList().then((res: Room []) => {
            this.rooms = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
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