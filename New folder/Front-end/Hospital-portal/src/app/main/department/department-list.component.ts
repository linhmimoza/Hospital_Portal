import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from './shared/department.model';
import { DepartmentService } from './service/department.service';
declare var $: any;
@Component({
    selector: 'department-list',
    templateUrl: './department-list.component.html'
    // styleUrls:['user-list.component.css']
})
export class DepartmentListComponent {

    departments: Department[] = [];

    constructor(private router: Router,
        private departmentService: DepartmentService) { }

    ngOnInit() {
        // this.loadingService.start();
        this.loadDepartment();
        $.getScript('assets/porto/javascripts/tables/examples.datatables.default.js', function () {
            $.getScript('assets/porto/javascripts/tables/examples.datatables.row.with.details.js', function () {
                $.getScript('assets/porto/javascripts/tables/examples.datatables.tabletools.js', function () {

                });
            });
        });
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