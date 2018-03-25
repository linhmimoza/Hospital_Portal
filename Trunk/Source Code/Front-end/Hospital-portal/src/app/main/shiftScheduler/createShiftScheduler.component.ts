import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ShiftScheduler } from './shared/shiftScheduler.model';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
import { UserService } from '../user/service/user.service';
import { User } from '../user/shared/user.model';
import { ShiftDay } from './shared/shiftDay.model';
import { Select } from '../select/share/select.model';
import { SelectService } from '../select/service/select.service';
import { CreateShiftScheduler } from './shared/createShiftScheduler.model';
import { CreateShiftDay } from './shared/createShiftDay.model';
import { AccountService } from '../account/account.service';
import { Department } from '../department/shared/department.model';
import { DepartmentService } from '../department/service/department.service';
declare var $: any;
@Component({
    selector: 'createShiftScheduler',
    templateUrl: './createShiftScheduler.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class CreateShiftSchedulerComponent {
    listShiftScheduler: CreateShiftScheduler[] = [];
    shiftScheduler = new CreateShiftScheduler();
    departments: Department[] = [];
    department: any;
    selectedOptions: any;
    toDay: String;
    users: User[] = [];
    week: CreateShiftDay[] = [];
    Mon: CreateShiftDay;
    Tue: CreateShiftDay;
    Wed: CreateShiftDay;
    Thu: CreateShiftDay;
    Fri: CreateShiftDay;
    Sat: CreateShiftDay;
    Sun: CreateShiftDay;
    dropdownList: Select [] = [] ;
    selectedItems = [];
    dropdownSettings = {};
    numberOfDay: number[] = [];

    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService, private userService: UserService,
        private selectService: SelectService, private accountService: AccountService,
        private departmentService: DepartmentService) { }

    ngOnInit() {
        this.loadDepartment();
        this.createMember();
        this.createSchedule();
        this.loadUser();
        $.getScript('assets/porto/javascripts/theme.init.js', function () {
            $.getScript('assets/porto/javascripts/theme.admin.extension.js', function () {
                $.getScript('/assets/porto/vendor/bootstrap-timepicker/bootstrap-timepicker.js', function () {

                });
            });
        });
    }
    loadDepartment(){
        this.departmentService.getList().then((departments: Department[]) => {
            this.departments = departments;
        });
    }
    loadUser() {
        this.userService.getList().then((users: User[]) => {
            this.users = users;
            this.selectService.userSelect(users, this.dropdownList);
            // console.log(users);
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
    addShift(day: CreateShiftDay) {
        this.shiftSchedulerService.addShiftToDay(day);
        $.getScript('assets/porto/javascripts/theme.init.js', function () {
            $.getScript('assets/porto/javascripts/theme.admin.extension.js', function () {
                $.getScript('/assets/porto/vendor/bootstrap-timepicker/bootstrap-timepicker.js', function () {

                });
            });
        });
        console.log(this.shiftScheduler);
           }

    ngAfterViewInit() {

    }

    createMember() {


        this.dropdownSettings = {
                    singleSelection: false,
                    text: 'Select Employee',
                    selectAllText: 'Select All',
                    unSelectAllText: 'UnSelect All',
                    enableSearchFilter: true,
                    classes: 'myclass custom-class'
                  };
        }
        onItemSelect(item: any) {
        }
        OnItemDeSelect(item: any) {

        }
        onSelectAll(items: any) {

        }
        onDeSelectAll(items: any) {

        }
con() {

   this.shiftSchedulerService.dateFullWeek(this.toDay, this.shiftScheduler);
   this.shiftScheduler.week = this.toDay;
}
save() {
    this.shiftScheduler.createby = this.accountService.getUserId();
    this.shiftScheduler.updateby = this.accountService.getUserId();
   this.shiftScheduler.departmentId = this.department;
    this.shiftSchedulerService.createMission(this.shiftScheduler).then(() => {
        console.log(this.shiftScheduler);

        alert('Save success');
        // this.router.navigate(['/main/manage-mission']);
    }).catch(err => {
       // debugger;
        alert(err);
    });
}
}
