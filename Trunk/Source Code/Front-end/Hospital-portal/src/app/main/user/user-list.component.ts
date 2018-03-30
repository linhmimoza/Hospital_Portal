import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './shared/user.model';
import { UserService } from './service/user.service';
import { debug } from 'util';
import { NotificationService } from '../extra/notification.service';
import { LoadingService } from '../extra/loading.service';
import { CookieService } from 'ngx-cookie-service';
import { DepartmentService } from '../department/service/department.service';
import { Department } from '../department/shared/department.model';
declare var $: any;

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['user-list.component.css']
})
export class UserListComponent {
    p: number = 1;
    users: User[] = [];
    roleCookie: number;
    departments: Department[] = [];
    dropdownDept: string;

    constructor(private router: Router,
        private userService: UserService, private notificationService: NotificationService,
        private loadingService: LoadingService, private cookieService: CookieService,
        private departmentService: DepartmentService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        console.log(this.roleCookie);
        if (this.roleCookie == 1) {
            this.loadingService.start();
            this.userService.getList().then((res: User[]) => {
                this.users = res;
                this.loadingService.stop();
                // console.log(this.users);
            }).catch(err => {
                alert(err);
                // this.loadingService.stop();
            });

            this.departmentService.getList().then((res: Department[]) => {
                this.departments = res;
                this.dropdownDept = "All";
            })
        } else if (this.roleCookie == 0) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }

    }


    ngAfterViewInit() {

    }

    detail(user: User) {
        this.router.navigate(['/main/user-detail', user.userId]);

    }

    switchStatus(user: User) {
        if (user.status == 1) {
            this.userService.deleteUser(user.userId).then(() => {
                this.notificationService.success("Success");
                this.userService.getList().then((res: User[]) => {
                    this.users = res;
                }).catch(err => {
                    alert(err);
                });
            });
        } else {
            this.userService.activeUser(user.userId).then(() => {
                this.notificationService.success("Success");
                this.userService.getList().then((res: User[]) => {
                    this.users = res;
                }).catch(err => {
                    alert(err);
                });
            });
        }
    }

    loadUserByDept() {
        if (this.dropdownDept == "All") {
            this.userService.getList().then((res: User[]) => {
                this.users = res;
            }).catch(err => {
                alert(err);
            });
        } else {
            this.userService.loadUsersByDept(this.dropdownDept).then((res: User[]) => {
                this.users = res;
            }).catch(err => {
                alert(err);
            });
        }
    }
}