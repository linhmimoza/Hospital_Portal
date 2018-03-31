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
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
@Component({
    selector: 'shiftScheduler-list',
    templateUrl: './shiftScheduler-list.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class ShiftSchedulerListComponent {
    departments: Department[] = [];
    department: Department;
    listShiftScheduler: ShiftScheduler[] = [];
    shiftScheduler = new ShiftScheduler();
    users: User[] = [];
    days: ShiftDay[] = [];
    numberOfDay: number[] = [];
    toDate: any;
    toDay: Date = new Date;
    roleCookie: number;
    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService, private userService: UserService,
        private departmentService: DepartmentService, private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3 || this.roleCookie == 5 || this.roleCookie == 1 ||
            this.roleCookie == 4 || this.roleCookie == 6) {
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
                console.log(this.shiftScheduler);
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
    to() {
        console.log(this.toDate, this.department);
        //   this.toDay = new Date();
        //     this.toDay.setDate( this.toDay.getDate() + 23 );

        //     console.log(this.toDay.toLocaleDateString());
        //     this.toDate = this.toDay.toLocaleDateString();
    }
    search() {
        this.shiftSchedulerService.getByWeek(this.toDate, this.department).then((res: ShiftScheduler) => {
            this.shiftScheduler = res;
            console.log(this.shiftScheduler);
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }
}
