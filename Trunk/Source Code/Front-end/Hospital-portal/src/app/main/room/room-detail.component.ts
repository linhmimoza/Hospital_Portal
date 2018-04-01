import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { RoomService } from './service/room.service';
import { Room } from './shared/room.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'room-detail',
    templateUrl: './room-detail.component.html'
})
export class RoomDetailComponent {
    room = new Room();
    routerSubcription: any;
    id: number = 0;
    title: string;
    rooms: Room[] = [];
    roleCookie: number;
    constructor(private route: ActivatedRoute, private router: Router, private roomService: RoomService,
        private cookieService: CookieService) {

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
    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.roomService.updateRoom(this.room).then(() => {
                    alert("Save success");
                    this.router.navigate(['/main/room-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            } else {
                this.roomService.createRoom(this.room).then(() => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    alert("Save success");
                    this.router.navigate(['/main/room-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            }
        });
    }
}