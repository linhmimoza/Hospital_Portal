import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from './shared/department.model';
import { DepartmentService } from './service/department.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;
@Component({
    selector: 'department-list',
    templateUrl: './department-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class DepartmentListComponent {

    departments: Department[] = [];
    roleCookie: number;
    constructor(private router: Router,
        private departmentService: DepartmentService, private cookieService: CookieService) { }

    ngOnInit() {
        this.roleCookie = +this.cookieService.get("Auth-RoleId");
        if (this.roleCookie == 1) {
            // this.loadingService.start();
            this.loadDepartment();
            $.getScript('assets/porto/javascripts/tables/examples.datatables.default.js', function () {
                $.getScript('assets/porto/javascripts/tables/examples.datatables.row.with.details.js', function () {
                    $.getScript('assets/porto/javascripts/tables/examples.datatables.tabletools.js', function () {

                    });
                });
            });
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
        // window.location.reload();
        this.router.navigateByUrl('/main/department-list');
        // });

    }
}