import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { DepartmentService } from './service/department.service';
import { Department } from './shared/department.model';

@Component({
    selector: 'department-detail',
    templateUrl: './department-detail.component.html'
})
export class DepartmentDetailComponent {
    department = new Department();
    routerSubcription: any;
    id: number = 0;
    title: string;
    departments: Department[] = [];
    constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentService) {

    }
    back() {
        this.router.navigate(['/main/department-list']);
    }

    ngOnInit() {
        // this.loadingService.start();
        // this.roleService.getList().then((res: Role[]) => {
        //     this.roles = res;
        //     console.log(this.roles);
        // }).catch(err => {
        //     alert(err);
        // });
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number        
            this.departmentService.getList().then((departments: Department[]) => {
                this.departments = departments;
                if (this.id == 0) this.department.departmentId = departments[0].departmentId;
            });
            if (this.id > 0) {
                this.title = "You are updating department";
                this.departmentService.getDepartment(this.id).then((res: Department) => {
                    this.department = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "You are creating new department";
            }
        });
    }
    save() {
        this.routerSubcription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.departmentService.updateDepartment(this.department).then(() => {
                    alert("Save success");
                    this.router.navigate(['/main/department-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            } else {
                this.departmentService.createDepartment(this.department).then(() => {
                    //Server trả về role sau khi save
                    //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
                    alert("Save success");
                    this.router.navigate(['/main/department-list']);
                }).catch(err => {
                    debugger
                    alert(err);
                });
            }
        });
    }
}