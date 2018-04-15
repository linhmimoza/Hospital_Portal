import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from './shared/department.model';
import { DepartmentService } from './service/department.service';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from '../extra/notification.service';
declare var $: any;
@Component({
    selector: 'department-list',
    templateUrl: './department-list.component.html',
    styleUrls: ['department-list.component.css']
})
export class DepartmentListComponent {
    popoverTitle: string = 'Are you sure?';
    popoverMessage: string = 'Are you really <b>sure</b> you want to do this?';
    confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
    cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
    confirmClicked: boolean = false;
    cancelClicked: boolean = false;

    p: number = 1;
    departments: Department[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private departmentService: DepartmentService, private cookieService: CookieService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 1) {
            // this.loadingService.start();
            this.loadDepartment();
        } else if (isNaN(this.roleCookie)) {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/login']);
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
    }

    loadDepartment() {
        this.departmentService.getAll().then((res: Department[]) => {
            this.departments = res;
        }).catch(err => {
            alert(err);
            // this.loadingService.stop();
        });
    }
    ngAfterViewInit() {

    }

    detail(department: Department) {
        this.router.navigate(['/main/department-detail', department.departmentId]);
    }

    delete(department: Department) {
        // this.departmentService.deleteDepartment(department.departmentId).then(() => {
        this.router.navigateByUrl('/main/department-list');
        // });
    }

    disableDeny() {
        this.notificationService.fail("Can't disable this department. There are active accounts in this department.");
    }

    switchStatus(department: Department) {
        if (department.status == 1) {
            department.status = 2;
        } else {
            department.status = 1;
        }
        this.departmentService.updateDepartment(department).then(() => {
            this.notificationService.success("Success");
            this.departmentService.getAll().then((res: Department[]) => {
                this.departments = res;
            }).catch(err => {
                alert(err);
            });
        });
    }
}