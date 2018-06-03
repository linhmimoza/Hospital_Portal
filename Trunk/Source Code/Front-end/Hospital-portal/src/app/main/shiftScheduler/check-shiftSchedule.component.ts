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
import { ManageService } from './service/shiftSchedulerManage.service';
import { CookieService } from 'ngx-cookie-service';
import { ShiftSchedulerManager } from './shared/ShiftSchedulerManager.model';
import { NotificationService } from '../extra/notification.service';
declare var $: any;
@Component({
    selector: 'check-shiftSchedule',
    templateUrl: './check-shiftSchedule.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class CheckShiftScheduleComponent {
    popoverTitle: string = 'Are you sure?';
    popoverMessage: string = 'Are you really <b>sure</b> you want to do this?';
    confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
    cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
    confirmDenyText: string = 'Deny <i class="glyphicon glyphicon-remove"></i>';
    confirmAcceptText: string = 'Accept <i class="glyphicon glyphicon-ok"></i>';
    departments: Department[] = [];
    department: any;
    listShiftScheduler: ShiftScheduler[] = [];
    shiftScheduler = new ShiftScheduler();
    users: User[] = [];
    days: ShiftDay[] = [];
    numberOfDay: number[] = [];
    toDate: any;
    toDay: Date = new Date;
    roleCookie: number;
    manage: ShiftSchedulerManager;
    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService, private userService: UserService,
        private departmentService: DepartmentService, private cookieService: CookieService,
        private manageService: ManageService, private notificationService: NotificationService) { }

    ngOnInit() {
        this.manage = this.manageService.getSelect();
        console.log(this.manage);
        if (this.manage.departmentId > 0) {
            this.toDate = this.manage.week;
            this.department = this.manage.departmentId;
            this.search(this.manage.week, this.manage.departmentId);
        }
        this.shiftSchedulerService.getThisWeek();
        this.roleCookie = +this.cookieService.get('Auth-RoleId');
        if (this.roleCookie === 2) {
            this.loadDepartment();
            // this.loadingService.start();
            this.userService.getList().then((users: User[]) => {
                this.users = users;
                // console.log(users);
            });

        } else if (this.roleCookie === 0) {

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
            this.router.navigate(['/home/main']);
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
        //   this.toDay = new Date();
        //     this.toDay.setDate( this.toDay.getDate() + 23 );

        //     console.log(this.toDay.toLocaleDateString());
        //     this.toDate = this.toDay.toLocaleDateString();
    }
    search(week, depId) {
        console.log(this.toDate, this.department);
        this.shiftSchedulerService.getWaitingByWeek(week, depId).then((res: ShiftScheduler) => {
            this.shiftScheduler = res;
            console.log(this.shiftScheduler);
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }
    accept() {
        this.shiftScheduler.status = 2;
        this.manage.checked = this.manage.waiting;
        this.shiftSchedulerService.checkScheduler(this.shiftScheduler);
        this.shiftSchedulerService.checkSchedulerManager(this.manage);
        this.notificationService.success("Success");
        this.router.navigate(['/main/manage-shiftSchedule']);
    }
    deny() {
        this.shiftScheduler.status = 3;
        this.manage.waiting = this.manage.checked;
        this.shiftSchedulerService.checkScheduler(this.shiftScheduler);
        this.shiftSchedulerService.checkSchedulerManager(this.manage);
        this.notificationService.success("Success");
        this.router.navigate(['/main/manage-shiftSchedule']);
    }
}
