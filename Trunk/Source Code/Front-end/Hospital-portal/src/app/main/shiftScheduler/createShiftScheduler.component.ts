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
import { CookieService } from 'ngx-cookie-service';
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
    department: any = 0;
    selectedOptions: any;
    toDay: String = '';
    users: User[] = [];
    empNumber = 2;
    valid: Boolean = false;
    star: string;
    end: string;
    last: string;
    dropdownList: Select[] = [];
    selectedItems = [];
    dropdownSettings = {};
    roleCookie: number;
    constructor(private router: Router,
        private shiftSchedulerService: ShiftSchedulerService, private userService: UserService,
        private selectService: SelectService, private accountService: AccountService,
        private departmentService: DepartmentService,
        private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 2 || this.roleCookie == 3) {
            this.loadDepartment();
            this.createMember();

        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/home/main']);
        }

    }

    loadDepartment() {
        this.departmentService.getList().then((departments: Department[]) => {
            this.departments = departments;
        });
    }

    loadUser() {
        this.userService.loadUsersByDept(this.department).then((users: User[]) => {
            this.users = users;
            this.selectService.userSelect(users, this.dropdownList);
            console.log(users);
        });
    }

    addShift() {
        this.loadUser();
        if (!((this.star >= this.end) || (this.star < this.last) || (this.star == null) || (this.end == null))) {
            this.shiftSchedulerService.addShiftToALLDay(this.shiftScheduler.shiftDayList,
                this.star, this.end);
            this.last = this.end;
            this.star = this.end;
            console.log(this.shiftScheduler);
        }
    }

    ngAfterViewInit() {

    }

    createMember() {
        this.dropdownSettings = {
            singleSelection: false,
            text: 'Select Employee',
            enableSearchFilter: true,
            classes: 'myclass custom-class',
            limitSelection: this.empNumber,
            maxHeight: 180

        };
    }
    onItemSelect(item: any) {
        this.validation();
    }
    OnItemDeSelect(item: any) {

    }
    onSelectAll(items: any) {

    }
    onDeSelectAll(items: any) {

    }
    change() {
        this.validation();
    }
    con() {
        this.last = null;
        this.star = null;
        this.end = null;
        this.dropdownList = [];
        this.shiftSchedulerService.dateFullWeek(this.toDay, this.shiftScheduler);
        this.shiftScheduler.week = this.toDay;
    }
    save() {
        this.shiftScheduler.createby = this.accountService.getUserId();
        this.shiftScheduler.updateby = this.accountService.getUserId();
        this.shiftScheduler.departmentId = this.department;
        this.valid = this.shiftSchedulerService.checkValidateScheduler(this.empNumber, this.toDay, this.department,
            this.shiftScheduler, this.valid);
        if (this.valid) {
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
    validation() {
        this.valid = this.shiftSchedulerService.checkValidateScheduler(this.empNumber, this.toDay, this.department,
            this.shiftScheduler, this.valid);
    }
}