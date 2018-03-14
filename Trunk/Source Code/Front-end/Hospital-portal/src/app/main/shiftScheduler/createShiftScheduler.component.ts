import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ShiftScheduler } from './shared/shiftScheduler.model';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
import { UserService } from '../user/service/user.service';
import { User } from '../user/shared/user.model';
import { ShiftDay } from './shared/shiftDay.model';
declare var $: any;
@Component({
    selector: 'createShiftScheduler',
    templateUrl: './createShiftScheduler.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class CreateShiftSchedulerComponent {
    listShiftScheduler: ShiftScheduler[] = [];
    shiftScheduler = new ShiftScheduler();
    selectedOptions: any;
    users: User[] = [];
    week: ShiftDay[] = [];
    Mon: ShiftDay;
    Tue: ShiftDay;
    Wed: ShiftDay;
    Thu: ShiftDay;
    Fri: ShiftDay;
    Sat: ShiftDay;
    Sun: ShiftDay;

    numberOfDay: number[] = [];

    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService, private userService: UserService) { }

    ngOnInit() {

        this.createSchedule();
        this.loadUser();
        $.getScript("assets/porto/javascripts/theme.init.js", function () {
            $.getScript("assets/porto/javascripts/theme.admin.extension.js", function () {

            });
        });
    }
    loadUser() {
        this.userService.getList().then((users: User[]) => {
            this.users = users;
            // console.log(users);
        });
    }
loadScheduler() {
    this.shiftSchedulerService.getList().then((res: ShiftScheduler[]) => {
        this.listShiftScheduler = res;
        this.shiftScheduler = this.listShiftScheduler[0];
        $.getScript("assets/porto/javascripts/theme.init.js", function () {
            $.getScript("assets/porto/javascripts/theme.admin.extension.js", function () {

            });
        });
    }).catch(err => {
        alert(err);
        // this.loadingService.stop();
    });
}
    createSchedule() {
        this.Mon = { shiftDayID: 0, dayInWeek: 'Mon', shiftScheduleId: 0, shiftDay: '', shiftList: [] };
        this.Tue = { shiftDayID: 0, dayInWeek: 'Tue', shiftScheduleId: 0, shiftDay: '', shiftList: [] };
        this.Wed = { shiftDayID: 0, dayInWeek: 'Wed', shiftScheduleId: 0, shiftDay: '', shiftList: [] };
        this.Thu = { shiftDayID: 0, dayInWeek: 'Thu', shiftScheduleId: 0, shiftDay: '', shiftList: [] };
        this.Fri = { shiftDayID: 0, dayInWeek: 'Fri', shiftScheduleId: 0, shiftDay: '', shiftList: [] };
        this.Sat = { shiftDayID: 0, dayInWeek: 'Sat', shiftScheduleId: 0, shiftDay: '', shiftList: [] };
        this.Sun = { shiftDayID: 0, dayInWeek: 'Sun', shiftScheduleId: 0, shiftDay: '', shiftList: [] };
        this.week = [this.Mon, this.Tue, this.Wed, this.Thu, this.Fri, this.Sat, this.Sun];
        this.shiftScheduler.shiftDayList = this.week;

    }
    setSchedule() {
        this.week = [this.Mon, this.Tue, this.Wed, this.Thu, this.Fri, this.Sat, this.Sun];
        this.shiftScheduler.shiftDayList = this.week;
    }
    addShift(day: ShiftDay) {
        this.shiftSchedulerService.addShiftToDay(day);
        $.getScript("assets/porto/javascripts/theme.init.js", function () {
            $.getScript("assets/porto/javascripts/theme.admin.extension.js", function () {

            });
        });
        console.log(this.shiftScheduler);
           }

    ngAfterViewInit() {

    }


}
