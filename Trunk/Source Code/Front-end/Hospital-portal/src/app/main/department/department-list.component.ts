import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from './shared/department.model';
import { DepartmentService } from './service/department.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
@Component({
    selector: 'department-list',
    templateUrl: './department-list.component.html',
    styleUrls:['department-list.component.css']
})
export class DepartmentListComponent {
    p: number = 1;
    departments: Department[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private departmentService: DepartmentService, private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 1) {
            // this.loadingService.start();
            this.loadDepartment();
        } else {
            alert("You don't have permission to view this page!");
            this.router.navigate(['/main/hospital-portal']);
        }
    }

    loadDepartment() {
        this.departmentService.getList().then((res: Department[]) => {
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
}