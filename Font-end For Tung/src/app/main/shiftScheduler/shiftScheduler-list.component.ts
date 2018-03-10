import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ShiftScheduler } from './shared/shiftScheduler.model';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
import { UserService } from '../user/service/user.service';
import { User } from '../user/shared/user.model';
declare var $: any;
@Component({
    selector: 'shiftScheduler-list',
    templateUrl: './shiftScheduler-list.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class ShiftSchedulerListComponent {

    listShiftScheduler: ShiftScheduler[] = [];
    shiftScheduler = new ShiftScheduler();
    users: User[] = [];

    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService, private userService: UserService) { }

    ngOnInit() {

        // this.loadingService.start();
        this.userService.getList().then((users: User[]) => {
            this.users = users;
            // console.log(users);
        });
        this.shiftSchedulerService.getList().then((res: ShiftScheduler[]) => {
            this.listShiftScheduler = res;
            this.shiftScheduler = this.listShiftScheduler[0];
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });

    }


    ngAfterViewInit() {


    }


}
