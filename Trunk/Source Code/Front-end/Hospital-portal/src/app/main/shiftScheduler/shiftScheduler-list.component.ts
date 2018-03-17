import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ShiftScheduler } from './shared/shiftScheduler.model';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
import { UserService } from '../user/service/user.service';
import { User } from '../user/shared/user.model';
import { ShiftDay } from './shared/shiftDay.model';
import { DepartmentService } from '../department/service/department.service';
import { Department } from '../department/shared/department.model';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
declare var $: any;
@Component({
    selector: 'shiftScheduler-list',
    templateUrl: './shiftScheduler-list.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class ShiftSchedulerListComponent {
    departments: Department[] = [];
    listShiftScheduler: ShiftScheduler[] = [];
    shiftScheduler = new ShiftScheduler();
    users: User[] = [];
    days: ShiftDay[] = [];
    numberOfDay: number[] = [];
    date: Date;
    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService, private userService: UserService,
        private departmentService: DepartmentService) { }

    ngOnInit() {
        $.getScript('assets/porto/javascripts/theme.init.js', function () {
            $.getScript('assets/porto/javascripts/theme.admin.extension.js', function () {
                $.getScript('/assets/porto/vendor/bootstrap-timepicker/bootstrap-timepicker.js', function () {

                });
            });
        });
this.loadDepartment();
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
        this.date = new Date();
        this.date.setDate( this.date.getDate() + 3 );
        console.log(this.date.toLocaleDateString());
    }

    printDate(date: String) {
console.log(date);
    }
    ngAfterViewInit() {

    }
loadDepartment() {
    this.departmentService.getList().then((departments: Department[]) => {
        this.departments = departments;

    });
}

}
