import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ShiftScheduler } from './shared/shiftScheduler.model';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
import { UserService } from '../user/service/user.service';
import { User } from '../user/shared/user.model';
import { ShiftDay } from './shared/shiftDay.model';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
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
    days: ShiftDay[] = [];
    numberOfDay: number[] = [];
    date: Date;
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
            $.getScript('assets/porto/javascripts/theme.init.js', function () {
                $.getScript('assets/porto/javascripts/theme.admin.extension.js', function () {
                    $.getScript('assets/porto/javascripts/tables/examples.datatables.default.js', function () {
                        $.getScript('assets/porto/javascripts/tables/examples.datatables.row.with.details.js', function () {
                            $.getScript('assets/porto/javascripts/tables/examples.datatables.tabletools.js', function () {
                            });
                        });
                    });
                });
            });
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
        this.date = new Date();
        this.date.setDate( this.date.getDate() + 3 );
        console.log(this.date.toLocaleDateString());
    }

    printDate(date: String) {
console.log(date);
    }
    ngAfterViewInit() {

    }


}
